<script lang="ts" setup>
import Footer from '@/components/content/Footer.vue';
import { useTabStore } from '@/store';
import { useSearchEngine } from './home';
import useAutofocus from '@/hooks/useAutofocus';
import router from '@/router';

const inputRef = useAutofocus<HTMLInputElement>();
const tabStore = useTabStore();

const {
    engine,
    engineList,
    engineListShow,
    searchText,
    result,
    toggleEngineList,
    changeEngine,
    shortcutKey,
    search,
    changeText,
    closeResult,
    arrowToggle,
    resultSelect,
} = useSearchEngine();

const isLocal = window.isLocal;

function goto(key: keyof typeof tabStore.tabs) {
    tabStore.reset();
    router.push('/' + key);
}
</script>

<template>
    <div class="home">
        <header>
            <nav class="nav">
                <span v-if="isLocal" class="link" @click="goto('admin')">管理后台</span>
                <span class="link" @click="goto('toolbox')">工具箱</span>
                <span class="link" @click="goto('playground')">演练场</span>
            </nav>
        </header>
        <div class="avatar">
            <img src="/avatar.svg" alt="头像" draggable="false" />
        </div>
        <div class="search">
            <button class="engine" @focus="toggleEngineList(true)" @blur="toggleEngineList(false)">
                <Icon :name="engine.name" />
            </button>
            <input
                type="text"
                ref="inputRef"
                v-model="searchText"
                :placeholder="`使用 ${engine.text} 搜索`"
                @input="changeText"
                @blur="closeResult"
                @focus="result.show = true"
                @keydown="shortcutKey"
                @keydown.enter="search"
                @keydown.esc="closeResult"
                @keydown.up="arrowToggle(-1)"
                @keydown.down="arrowToggle(1)"
            />
            <button class="btn" @click="search">
                <Icon name="search" />
            </button>
            <Transition name="slide-fade">
                <div class="engine-list" v-show="engineListShow">
                    <div v-for="(item, key) in engineList" :key="key" class="item" @click="changeEngine(item)">
                        <Icon :name="item.name" />
                        <span class="name">{{ item.text }}</span>
                        <span class="key-tip">{{ item.tip }}</span>
                    </div>
                </div>
            </Transition>
            <Transition name="slide-fade">
                <div class="search-result" v-show="result.show && result.data?.length">
                    <div
                        v-for="(item, i) in result.data"
                        :key="i"
                        class="item"
                        :class="{ active: i === result.index }"
                        @mousemove="result.index = i"
                        @mouseleave="result.index = -1"
                        @click="resultSelect(i)"
                    >
                        {{ item }}
                    </div>
                </div>
            </Transition>
        </div>
    </div>
    <Footer />
</template>

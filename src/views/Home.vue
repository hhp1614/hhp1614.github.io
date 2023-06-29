<script lang="ts" setup>
import Footer from '@/components/content/Footer.vue';
import { useDarkModeStore, useTabStore } from '@/store';
import { useSearchEngine } from './home';
import useAutofocus from '@/hooks/useAutofocus';

const inputRef = useAutofocus<HTMLInputElement>();
const tabStore = useTabStore();

const { engine, engineList, engineListShow, searchText, toggleEngineList, changeEngine, shortcutKey, search } =
    useSearchEngine();

const darkModeStore = useDarkModeStore();
</script>

<template>
    <div class="home">
        <header>
            <nav>
                <router-link :to="tabStore.active.path || '/toolbox'">工具箱</router-link>
            </nav>
        </header>
        <div class="avatar">
            <img :src="darkModeStore.darkModeOn ? '/avatar-dark.svg' : '/avatar.svg'" alt="头像" draggable="false" />
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
                @keydown="shortcutKey"
                @keypress.enter="search"
            />
            <button class="btn" @click="search"><Icon name="search" /></button>
            <Transition name="slide-fade">
                <div class="engine-list" v-show="engineListShow">
                    <div v-for="(item, key) in engineList" :key="key" class="item" @click="changeEngine(item)">
                        <Icon :name="item.name" />
                        <span class="name">{{ item.text }}</span>
                        <span class="key-tip">{{ item.tip }}</span>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
    <Footer />
</template>

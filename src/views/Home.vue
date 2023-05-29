<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useDarkModeStore } from '@/store';
import { useSearchEngine } from './home';

const { engine, engineList, engineListShow, searchText, toggleEngineList, changeEngine, shortcutKey, search } = useSearchEngine();

const darkModeStore = useDarkModeStore();
</script>

<template>
    <div class="home">
        <Header />
        <div class="avatar">
            <img :src="darkModeStore.darkModeOn ? '/avatar-dark.svg' : '/avatar.svg'" alt="头像" draggable="false" />
        </div>
        <div class="search">
            <button class="engine" @focus="toggleEngineList(true)" @blur="toggleEngineList(false)">
                <i :class="'icon-' + engine.name"></i>
            </button>
            <input type="text" v-model="searchText" :placeholder="`使用 ${engine.text} 搜索`" @keydown="shortcutKey" @keypress.enter="search" autofocus />
            <button class="btn" @click="search">
                <i class="icon-search"></i>
            </button>
            <Transition name="slide-fade">
                <div class="engine-list" v-show="engineListShow">
                    <div v-for="(item, key) in engineList" :key="key" class="item" @click="changeEngine(item)">
                        <i :class="'icon-' + item.name"></i>
                        <span class="name">{{ item.text }}</span>
                        <span class="key-tip">{{ item.tip }}</span>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
    <Footer />
</template>

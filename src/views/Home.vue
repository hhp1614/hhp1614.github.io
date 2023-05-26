<script lang="ts" setup>
import { useDarkModeStore } from '../store'
import { useDateTime, useSearchEngine } from './home'

const dateTime = useDateTime()

const { engine, engineList, engineListShow, searchText, toggleEngineList, changeEngine, shortcutKey, search } = useSearchEngine()

const darkModeStore = useDarkModeStore()
</script>

<template>
  <div class="home">
    <header>
      <div class="date-time">{{ dateTime }}</div>
      <div class="links">
        <router-link to="/toolbox">工具箱</router-link>
        <a href="https://github.com/hhp1614" target="_blank">GitHub</a>
      </div>
    </header>
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
</template>

<template>
  <div class="so" @click="globalClick">
    <div class="so-container">
      <div class="so-search">
        <div class="so-search-options">
          <button class="so-search-options-btn" @click="optionsListVisible = !optionsListVisible">{{selectedOption.name}}</button>
          <ul v-show="optionsListVisible" class="so-search-options-list">
            <li v-for="(item, index) in optionsList" :key="index" @click="selectedOption = item">{{item.name}}</li>
          </ul>
        </div>
        <input class="so-search-input" v-model="keyword">
        <i class="so-search-clear"></i>
        <button class="so-search-btn" @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
// 占位符
const placeholder = '%KEYWORD%';

export default {
  props: ['page'],
  data() {
    return {
      optionsListVisible: false,
      keyword: '',
      optionsList: [
        {name: 'Google', url: `https://www.google.com/search?q=${placeholder}`},
        {name: 'Bing', url: `https://cn.bing.com/search?q=${placeholder}`},
        {name: '百度', url: `https://www.baidu.com/s?wd=${placeholder}`},
      ],
      selectedOption: '',
      selectedUrl: ''
    };
  },
  created() {
    this.selectedOption = this.optionsList[0];
  },
  methods: {
    globalClick(e) {
      if (e.target.classList.value === 'so-search-options-btn') {
        return;
      }
      this.optionsListVisible = false;
    },
    search() {
      console.log(this.selectedOption);
      const url = this.selectedOption.url.replace(placeholder, this.keyword);
      console.log(url);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./so.scss";
</style>

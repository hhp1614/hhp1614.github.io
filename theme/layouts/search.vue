<template>
  <div class="so" @click="globalClick">
    <saber-link class="gotoBlog" to="/">Blog</saber-link>
    <img class="so-logo" :src="`/img/so/${selectedOption.img}`" :alt="selectedOption.img" />
    <div class="so-container">
      <div class="so-search">
        <div class="so-search-options">
          <button class="so-search-options-btn" @click="optionsListVisible = !optionsListVisible">
            {{ selectedOption.name }}
          </button>
          <ul v-show="optionsListVisible" class="so-search-options-list">
            <Scrollbar>
              <li v-for="(item, index) in optionsList" :key="index" @click="changeOption(item)">{{ item.name }}</li>
            </Scrollbar>
          </ul>
        </div>
        <input ref="keyword" class="so-search-input" v-model="keyword" @keyup.enter="search" />
        <i v-show="keyword" class="so-search-clear" @click="clear"></i>
        <button class="so-search-btn" @click="search">
          <i class="icon-search"></i>
        </button>
      </div>
    </div>
    <div class="so-time">{{ time }}</div>
    <div class="so-date-week">
      <span>{{ date }}</span>
      <span>星期{{ week }}</span>
    </div>
  </div>
</template>

<script>
import { timeFormat } from 'hhp-utils';
import Scrollbar from '../components/Scrollbar';

// 占位符
const placeholder = '%KEYWORD%';
// 获取当前星期几
function getWeek() {
  return ['一', '二', '三', '四', '五', '六', '日'][new Date().getDay() - 1];
}

export default {
  head() {
    const title = this.page.attributes.title;
    let summary = this.page.attributes.subtitle || this.page.excerpt || '';
    if (summary) {
      // Strip HTML tags
      summary = summary.replace(/<(?:.|\n)*?>/gm, '');
    }
    return { title };
  },
  props: ['page'],
  components: { Scrollbar },
  data() {
    return {
      optionsListVisible: false,
      keyword: '',
      optionsList: [
        { name: 'Google', url: `https://www.google.com/search?q=${placeholder}`, img: 'google.png' },
        { name: 'DuckDuckGo', url: `https://duckduckgo.com/?q=${placeholder}`, img: 'duckduckgo.png' },
        { name: 'bilibili', url: `http://search.bilibili.com/all?keyword=${placeholder}`, img: 'bilibili.png' },
        { name: 'GitHub', url: `https://github.com/search?q=${placeholder}`, img: 'github.png' },
        { name: '掘金', url: `https://juejin.im/search?query=${placeholder}`, img: 'juejin.png' },
        { name: '知乎', url: `https://www.zhihu.com/search?type=content&q=${placeholder}`, img: 'zhihu.png' },
        { name: 'V2EX', url: `https://www.sov2ex.com/?q=${placeholder}`, img: 'v2ex.png' },
        { name: 'StackOverflow', url: `https://stackoverflow.com/search?q=${placeholder}`, img: 'stack-overflow.png' },
        { name: 'NPM', url: `https://www.npmjs.com/search?q=${placeholder}`, img: 'npm.png' },
        { name: 'CNPM', url: `http://npm.taobao.org/package/${placeholder}`, img: 'cnpm.png' },
        { name: 'Yarn', url: `https://www.yarnpkg.com/zh-Hans/packages?q=${placeholder}`, img: 'yarn.png' },
        { name: 'Bing', url: `https://cn.bing.com/search?q=${placeholder}`, img: 'bing.png' },
        { name: '京东', url: `https://search.jd.com/Search?keyword=${placeholder}&enc=utf-8`, img: 'jd.png' },
        { name: '天猫', url: `https://list.tmall.com/search_product.htm?q=${placeholder}`, img: 'tmall.png' },
        { name: '百度', url: `https://www.baidu.com/s?wd=${placeholder}`, img: 'baidu.png' },
        {
          name: 'Google 翻译',
          url: `https://translate.google.com/?#auto|auto|${placeholder}`,
          img: 'google-translate.png'
        }
      ],
      selectedOption: '',
      selectedUrl: '',
      date: timeFormat().split(' ')[0],
      time: timeFormat().split(' ')[1],
      week: getWeek()
    };
  },
  created() {
    // 阻止编译报错
    try {
      this.updateTime();
      this.selectedOption = localStorage.SO_OPTION ? JSON.parse(localStorage.SO_OPTION) : this.optionsList[0];
      console.log(this.selectedOption);
    } catch (e) {}
  },
  mounted() {
    this.$refs.keyword.focus();
  },
  methods: {
    // 全局点击事件
    globalClick(e) {
      if (e.target.classList.value === 'so-search-options-btn') {
        return;
      }
      this.optionsListVisible = false;
    },
    // 改变搜索选项
    changeOption(item) {
      this.selectedOption = item;
      localStorage.SO_OPTION = JSON.stringify(item);
    },
    // 搜索
    search() {
      console.log(this.selectedOption);
      try {
        window.location.href = this.selectedOption.url.replace(placeholder, this.keyword);
      } catch (e) {}
    },
    // 清除输入内容
    clear() {
      this.keyword = '';
      this.$refs.keyword.focus();
    },
    // 更新时间
    updateTime() {
      window.setInterval(() => {
        this.week = getWeek();
        this.date = timeFormat().split(' ')[0];
        this.time = timeFormat().split(' ')[1];
      }, 1000);
    }
  }
};
</script>

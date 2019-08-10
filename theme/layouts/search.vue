<template>
  <div class="so" @click="globalClick">
    <saber-link class="gotoBlog" to="/">Blog</saber-link>
    <img
      class="so-logo"
      v-show="selectedOption.key === item.key"
      v-for="(item, index) in optionsList"
      :key="index" :src="images[item.key]"
      :alt="selectedOption.name"
    >
    <div class="so-container">
      <div class="so-search">
        <div class="so-search-options">
          <button class="so-search-options-btn" @click="optionsListVisible = !optionsListVisible">
            {{ selectedOption.name }}
          </button>
          <i v-show="optionsListVisible" class="so-search-options-allow"></i>
          <ul v-show="optionsListVisible" class="so-search-options-list">
            <Scrollbar>
              <li v-for="(item, index) in optionsList" :key="index" @click="changeOption(item)">{{ item.name }}</li>
            </Scrollbar>
          </ul>
        </div>
        <input ref="keyword" class="so-search-input" v-model="keyword" @keyup.enter="search"/>
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

// 引入logo图片
import logoGoogle from '../img/search/google.png';
import logoDuckDuckGo from '../img/search/duckduckgo.png';
import logoBiliBili from '../img/search/bilibili.png';
import logoGitHub from '../img/search/github.png';
import logoJueJin from '../img/search/juejin.png';
import logoZhiHu from '../img/search/zhihu.png';
import logoV2EX from '../img/search/v2ex.png';
import logoStackOverflow from '../img/search/stack-overflow.png';
import logoNPM from '../img/search/npm.png';
import logoCNPM from '../img/search/cnpm.png';
import logoYarn from '../img/search/yarn.png';
import logoBing from '../img/search/bing.png';
import logoJD from '../img/search/jd.png';
import logoTMall from '../img/search/tmall.png';
import logoBaiDu from '../img/search/baidu.png';
import logoGoogleTranslate from '../img/search/google-translate.png';

// 占位符
const placeholder = '%KEYWORD%';

// 获取当前星期几
function getWeek() {
  return ['一', '二', '三', '四', '五', '六', '日'][new Date().getDay() - 1];
}

// 图片
const images = {
  Google: logoGoogle,
  DuckDuckGo: logoDuckDuckGo,
  BiliBili: logoBiliBili,
  GitHub: logoGitHub,
  JueJin: logoJueJin,
  ZhiHu: logoZhiHu,
  V2EX: logoV2EX,
  StackOverflow: logoStackOverflow,
  NPM: logoNPM,
  CNPM: logoCNPM,
  Yarn: logoYarn,
  Bing: logoBing,
  JD: logoJD,
  TMall: logoTMall,
  BaiDu: logoBaiDu,
  GoogleTranslate: logoGoogleTranslate
};

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
      images,
      optionsListVisible: false,
      keyword: '',
      optionsList: [
        { key: 'Google', name: 'Google', url: `https://www.google.com/search?q=${placeholder}` },
        { key: 'DuckDuckGo', name: 'DuckDuckGo', url: `https://duckduckgo.com/?q=${placeholder}` },
        { key: 'BiliBili', name: 'bilibili', url: `http://search.bilibili.com/all?keyword=${placeholder}` },
        { key: 'GitHub', name: 'GitHub', url: `https://github.com/search?q=${placeholder}` },
        { key: 'JueJin', name: '掘金', url: `https://juejin.im/search?query=${placeholder}` },
        { key: 'ZhiHu', name: '知乎', url: `https://www.zhihu.com/search?type=content&q=${placeholder}` },
        { key: 'V2EX', name: 'V2EX', url: `https://www.sov2ex.com/?q=${placeholder}` },
        { key: 'StackOverflow', name: 'StackOverflow', url: `https://stackoverflow.com/search?q=${placeholder}` },
        { key: 'NPM', name: 'NPM', url: `https://www.npmjs.com/search?q=${placeholder}` },
        { key: 'CNPM', name: 'CNPM', url: `http://npm.taobao.org/package/${placeholder}` },
        { key: 'Yarn', name: 'Yarn', url: `https://www.yarnpkg.com/zh-Hans/packages?q=${placeholder}` },
        { key: 'Bing', name: 'Bing', url: `https://cn.bing.com/search?q=${placeholder}` },
        { key: 'JD', name: '京东', url: `https://search.jd.com/Search?keyword=${placeholder}&enc=utf-8` },
        { key: 'TMall', name: '天猫', url: `https://list.tmall.com/search_product.htm?q=${placeholder}` },
        { key: 'BaiDu', name: '百度', url: `https://www.baidu.com/s?wd=${placeholder}` },
        { key: 'GoogleTranslate', name: 'Google 翻译', url: `https://translate.google.com/?#auto|auto|${placeholder}` }
      ],
      selectedOption: {},
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
    } catch (e) {
    }
  },
  mounted() {
    this.$refs.keyword.focus();
    try {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      console.log('test1');
      document.body.addEventListener('touchmove', e => {
        e.preventDefault();
      });
    } catch (e) {
    }
  },
  destroyed() {
    try {
      document.body.style.height = '';
      document.body.style.overflow = '';
    } catch (e) {
    }
  },
  methods: {
    // 全局点击事件
    globalClick(e) {
      if (e.target.classList.value !== 'so-search-options-btn') {
        this.optionsListVisible = false;
      }
    },
    // 改变搜索选项
    changeOption(item) {
      this.selectedOption = item;
      localStorage.SO_OPTION = JSON.stringify(item);
    },
    // 搜索
    search() {
      try {
        window.location.href = this.selectedOption.url.replace(placeholder, this.keyword);
      } catch (e) {
      }
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

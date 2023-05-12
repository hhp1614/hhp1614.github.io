import { reactive, ref } from 'vue';

export function useDateTime() {
  const dateTime = ref('');
  const padZero = (num: number) => String(num).padStart(2, '0');

  const rec = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const day = d.getDay();
    const hour = padZero(d.getHours());
    const minute = padZero(d.getMinutes());
    const second = padZero(d.getSeconds());
    const week = '日一二三四五六';
    dateTime.value = `${year}年${month}月${date}日 星期${week[day]} ${hour}:${minute}:${second}`;
    setTimeout(() => rec(), 1000);
    return dateTime;
  };

  return rec();
}

export function useEngineList() {
  type EngineItem = { name: string; text: string; tip: string; href: string };
  const engine = reactive({
    name: 'google',
    href: 'https://www.google.com/search?q='
  });
  const engineList = ref<EngineItem[]>([
    { name: 'google', text: '谷歌', tip: 'Alt+1', href: 'https://www.google.com/search?q=' },
    { name: 'baidu', text: '百度', tip: 'Alt+2', href: 'https://www.baidu.com/s?ie=utf-8&word=' },
    { name: 'bing', text: '必应', tip: 'Alt+3', href: 'https://cn.bing.com/search?q=' }
  ]);
  const engineListShow = ref(false);
  const searchText = ref('');

  /**
   * 切换搜索引擎列表显示状态
   * @param show 是否显示搜索引擎列表
   */
  const toggleEngineList = (show: boolean) => {
    engineListShow.value = show;
  };
  /**
   * 切换搜索引擎
   * @param item 搜索引擎选项
   */
  const changeEngine = (item: EngineItem) => {
    engine.name = item.name;
    engine.href = item.href;
    localStorage.setItem('search-engine', item.name);
  };
  /**
   * 快捷键事件
   * @param e 键盘事件对象
   */
  const shortcutKey = (e: KeyboardEvent) => {
    // Alt + Enter
    if (e.altKey && e.key === 'Enter' && searchText.value) {
      return window.open(engine.href + searchText.value);
    }
    // Alt + 数字
    const key = +e.key;
    if (e.altKey && key <= engineList.value.length && key > 0) {
      const item = engineList.value.find(v => v.tip === `Alt+${key}`);
      changeEngine(item!);
    }
  };
  /**
   * 搜索事件
   */
  const search = () => {
    searchText.value && location.replace(engine.href + searchText.value);
  };

  const cacheEngine = localStorage.getItem('search-engine');
  if (cacheEngine) {
    const item = engineList.value.find(v => v.name === cacheEngine);
    if (item) {
      engine.name = item.name;
      engine.href = item.href;
    }
  }

  return { engine, engineList, engineListShow, searchText, toggleEngineList, changeEngine, shortcutKey, search };
}

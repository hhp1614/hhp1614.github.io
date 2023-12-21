import { searchEngine } from '@/api/home';

/**
 * 当前时间
 */
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

/**
 * 搜索引擎
 */
export function useSearchEngine() {
    /** 搜索引擎选项 */
    type EngineItem = { name: string; text: string; tip: string; href: string };
    /** 当前使用的搜索引擎 */
    const engine = ref({
        name: 'google',
        text: '谷歌',
        href: 'https://www.google.com/search?q=',
    });
    /** 搜索引擎列表 */
    const engineList = ref<EngineItem[]>([
        { name: 'google', text: '谷歌', tip: 'Alt+1', href: 'https://www.google.com/search?q=' },
        { name: 'baidu', text: '百度', tip: 'Alt+2', href: 'https://www.baidu.com/s?ie=utf-8&word=' },
        { name: 'bing', text: '必应', tip: 'Alt+3', href: 'https://cn.bing.com/search?q=' },
    ]);
    /** 搜索引擎显示状态 */
    const engineListShow = ref(false);
    /** 搜索文本 */
    const searchText = ref('');
    const result = reactive({
        show: false,
        data: [] as string[],
        index: -1,
    });

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
        engine.value = { name: item.name, text: item.text, href: item.href };
        localStorage.setItem('search-engine', item.name);
        result.index = -1;
        changeText();
    };
    /**
     * 快捷键事件
     * @param e 键盘事件对象
     */
    const shortcutKey = (e: KeyboardEvent) => {
        const key = e.key;
        // Alt + 数字
        if (e.altKey && +key <= engineList.value.length && +key > 0) {
            const item = engineList.value.find(v => v.tip === `Alt+${key}`)!;
            changeEngine(item);
        }
    };
    /**
     * 搜索事件
     */
    const search = () => {
        if (searchText.value) {
            location.href = engine.value.href + searchText.value;
        }
    };

    // 使用本地缓存的搜索引擎
    const cacheEngine = localStorage.getItem('search-engine');
    if (cacheEngine) {
        const item = engineList.value.find(v => v.name === cacheEngine);
        if (item) {
            engine.value = { name: item.name, text: item.text, href: item.href };
        }
    }

    /**
     * 输入事件
     */
    const changeText = async () => {
        if (!window.isLocal) {
            return;
        }
        if (!searchText.value) {
            result.show = false;
            result.data = [];
            return;
        }
        result.data = [];
        const res = await searchEngine(engine.value.name, searchText.value);
        result.show = true;
        result.data = res.data;
    };
    /**
     * 关闭搜索结果
     */
    const closeResult = () => {
        result.show = false;
        result.index = -1;
    };
    /**
     * 上下箭头事件
     * @param step 步长
     */
    const arrowToggle = (step: number) => {
        result.index += step;
        if (result.index >= result.data.length) {
            result.index = 0;
        } else if (result.index < 0) {
            result.index = engineList.value.length - 1;
        }
        searchText.value = result.data[result.index];
    };
    /**
     * 选择搜索结果
     * @param index 索引
     */
    const resultSelect = (index: number) => {
        searchText.value = result.data[index];
        search();
    };

    return {
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
    };
}

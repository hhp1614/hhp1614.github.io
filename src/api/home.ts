import request from '@/utils/request';

/**
 * 搜索
 * @param engine 搜索引擎
 * @param word 搜索词
 * @returns 搜索结果
 */
export function searchEngine(engine: string, word: string) {
    return request<string[]>('/search/engine', { engine, word });
}

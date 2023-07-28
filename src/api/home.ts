import request from '@/utils/request';

export function searchEngine(engine: string, word: string) {
    return request<string[]>('/search/engine', { engine, word });
}

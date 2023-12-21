import request from '@/utils/request';

/**
 * 获取历史记录列表参数
 */
export type GetHistoryIndexParams = Partial<{
    title: string;
    scheme: string;
    host: string;
    port: number;
}>;

/**
 * 获取历史记录列表项类型
 */
export type GetHistoryIndexItem = {
    id: number;
    title: string;
    scheme: string;
    host: string;
    port: number;
    path: string;
    query: string;
    fragment: string;
    url: string;
    create_ts: string;
};

/**
 * 获取历史记录列表
 * @param params 参数
 */
export function getHistoryIndex(params: GetHistoryIndexParams | PageParams) {
    return request<PaginateType<GetHistoryIndexItem>>('/history/index', params);
}

/**
 * 删除历史记录
 * @param id 历史记录ID
 */
export function removeHistory(id: number) {
    return request<boolean>('/history/remove', { id });
}

/**
 * 获取域名记录列表参数
 */
export type GetHistoryHostParams = Partial<{
    host: string;
}>;

/**
 * 获取域名记录列表项类型
 */
export type GetHistoryHostItem = {
    id: number;
    host: string;
    count: number;
};

/**
 * 获取域名记录列表
 * @param params 参数
 */
export function getHistoryHost(params: GetHistoryHostParams | PageParams) {
    return request<PaginateType<GetHistoryHostItem>>('/history/host', params);
}

/**
 * 删除域名记录
 * @param id 域名记录ID
 */
export function removeHistoryHost(id: number) {
    return request<boolean>('/history/hostRemove', { id });
}

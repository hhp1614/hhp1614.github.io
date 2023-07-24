import request from '@/utils/request';

export type GetHistoryAllParams = {
    page: number;
    size: number;
};

/**
 * 获取历史记录列表项类型
 */
export type GetHistoryAllItem = {
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
export function getHistoryAll(params: GetHistoryAllParams) {
    return request<PaginateType<GetHistoryAllItem>>('/history/all', params);
}

/**
 * 删除历史记录
 * @param id 历史记录ID
 */
export function removeHistory(id: number) {
    return request<boolean>('/history/remove', { id });
}

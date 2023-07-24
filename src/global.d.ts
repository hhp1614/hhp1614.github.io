/**
 * 页面类型
 */
declare type Pages = {
    path: string;
    name: string;
    meta: { title: string; desc: string };
    component?: any;
    children: Pages;
}[];

declare type PaginateType<T> = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    data: T[];
};

/**
 * 扩展 window 对象
 */
interface Window {
    isLocal: boolean;
}

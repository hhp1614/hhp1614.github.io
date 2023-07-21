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

/**
 * 扩展 window 对象
 */
interface Window {
    isLocal: boolean;
}

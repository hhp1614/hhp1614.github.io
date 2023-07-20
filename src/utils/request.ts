const base = 'http://localhost/homepage';

/**
 * 响应类型
 */
type Response<T> = {
    /** 状态 */
    status: boolean;
    /** 数据 */
    data: T;
    /** 消息 */
    msg: string;
};

/**
 * Fetch 请求
 * @param url 接口地址
 * @param params 参数
 */
export default async function <T = unknown>(url: string, params = {}): Promise<Response<T>> {
    const response = await fetch(base + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
    return response.json();
}

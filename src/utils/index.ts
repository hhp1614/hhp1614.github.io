interface Scheduled<Args extends unknown[]> {
    (...args: Args): void;
    clear: VoidFunction;
}

type ScheduleCallback = <Args extends unknown[]>(callback: (...args: Args) => void, wait?: number) => Scheduled<Args>;

/**
 * 防抖
 * @param callback 防抖回调
 * @param wait 防抖的持续时间（单位：毫秒）
 * @returns 防抖函数
 * @example
 * ```ts
 * const fn = debounce((message: string) => console.log(message), 250);
 * fn('Hello!');
 * fn.clear(); // 清除正在运行的定时器
 * ```
 */
export const debounce: ScheduleCallback = (callback, wait) => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const clear = () => clearTimeout(timeoutId);
    const debounced: typeof callback = (...args) => {
        if (timeoutId !== undefined) clear();
        timeoutId = setTimeout(() => callback(...args), wait);
    };
    return Object.assign(debounced, { clear });
};

/**
 * 节流
 * @param callback 节流回调
 * @param wait 持续时间
 * @returns 节流函数
 * @example
 * ```ts
 * const fn = throttle((val: string) => console.log(val), 250);
 * fn('my-new-value');
 * fn.clear(); // 清除正在运行的定时器
 * ```
 */
export const throttle: ScheduleCallback = (callback, wait) => {
    let isThrottled = false,
        timeoutId: ReturnType<typeof setTimeout>,
        lastArgs: Parameters<typeof callback>;

    const throttled: typeof callback = (...args) => {
        lastArgs = args;
        if (isThrottled) return;
        isThrottled = true;
        timeoutId = setTimeout(() => {
            callback(...lastArgs);
            isThrottled = false;
        }, wait);
    };

    const clear = () => {
        clearTimeout(timeoutId);
        isThrottled = false;
    };

    return Object.assign(throttled, { clear });
};

type Type = 'info' | 'success' | 'warning' | 'error';

/**
 * 提示框
 * @param text 提示文本
 * @param type 提示类型
 * @param second 显示时间（秒）
 */
export default function (text: string, type: Type = 'info', second = 2) {
    const old = document.querySelector('.toast');
    old && old.remove();

    const animateTime = 200;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.style.animation = `toast-in ${animateTime}ms`;
    toast.innerText = text;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = `toast-out ${animateTime}ms forwards`;
        setTimeout(() => toast.remove(), animateTime);
    }, second * 1000);
}

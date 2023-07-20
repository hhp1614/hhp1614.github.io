type Type = 'info' | 'success' | 'warning' | 'error';

export default function (text: string, type: Type = 'info', second = 2) {
    const old = document.querySelector('.toast');
    if (old) {
        document.body.removeChild(old);
    }

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

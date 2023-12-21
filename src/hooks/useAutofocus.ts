/**
 * 自动选中
 * @returns 自动选中的 ref<DOM>()
 */
export default function <T extends HTMLTextAreaElement | HTMLInputElement = HTMLTextAreaElement>(): Ref<T | undefined> {
    const refDom = ref<T>();

    onMounted(() => {
        refDom.value?.focus();
    });

    return refDom;
}

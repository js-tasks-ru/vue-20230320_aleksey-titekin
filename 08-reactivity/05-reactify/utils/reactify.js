import { computed, reactive, ref, toRef } from 'vue';

/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {
   return () => computed((...args) => {
    const aa = ref(arguments[0])
    return func(args);
  });
}

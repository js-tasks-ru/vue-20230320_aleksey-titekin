import { computed, isProxy, isReactive, isRef, reactive, ref, toRef } from 'vue';

/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {
  return (...arr) =>
    computed(() => {
      const newArr = [];
      arr.forEach(item => {
        newArr.push(isRef(item) ? item.value : item)
      })
      const result = func(...newArr);
      return result;
    });
}

import { nextTick, ref, watch, watchEffect } from 'vue';
import debounce from 'lodash/debounce';

/**
 * @template T
 * @param {Ref<T>} source - Исходный ref
 * @param {number} wait - Ожидание в миллисекундах для debounce
 * @returns {Ref<T>} - Новый ref, обновляющийся с debounce при обновлении исходного ref-а
 */
export function debouncedRef(source, wait) {
  const debounced = ref(source.value); // ...

  watch(
    source,
    () => {
      setTimeout(() => {
        nextTick(() => (debounced.value = source.value));
      }, wait);
    },
    {
      flush: 'post',
    },
  );

  return debounced;
}

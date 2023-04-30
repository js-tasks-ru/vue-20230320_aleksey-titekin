<template>
  <div class="button-group" role="group">
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UiButtonGroup',

  props: {
    modelValue: {
      required: true,
    },
  },

  provide() {
    return {
      selected: computed(() => this.modelValue),
      select: this.select,
    }
  },

  emits: ['update:modelValue'],

  methods: {
    select(value) {
      this.$emit('update:modelValue',value);
    }
  },
};
</script>

<style scoped>
.button-group {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  white-space: nowrap;
}
</style>

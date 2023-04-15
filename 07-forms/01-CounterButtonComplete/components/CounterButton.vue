<template>
  <button @click="upCount">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  data() {
    return {
      localCount: this.count, 
    }
  },

  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  
  emits: ['update:count'],

  methods: {
    upCount() {
      this.$emit('update:count', ++this.localCount);
    }
  },

  watch: {
    count(newValue) {
      this.localCount = newValue;
    }
  }
};
</script>

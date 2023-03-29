import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие

  props: {
    count: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value >= 0
      }
    },
  },

  emits: ['update:count'], 
  
  methods: {
    getCount(event) {
      const value = this.count + 1;
      this.$emit('update:count', value);
    }
  },

  template: `<button type="button" @click="this.$emit('update:count', this.count + 1)">{{ count }}</button>`,

});

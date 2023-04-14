<template>
  <UiInput :type="type" 
    :modelValue="value"
    @change="valueChange($event)"
  
  />
</template>

<script>
import UiInput from './UiInput.vue';

export default {
  name: 'UiInputDate',

  data() {
    return {
      date: '',
    }
  },

  components: { UiInput },

  emits: ['update:modelValue'],

  props: {
    type: {
      type: String,
      default: 'date',
    },

    modelValue: {
      type: Number,
      default: null,
    },
  },


  computed: {
    value() {
      switch(this.type) {
        case 'date':
          return (new Date(this.modelValue)).toISOString().slice(0,10);
        case 'time':
          return (new Date(this.modelValue)).toISOString().slice(11,16);
        default:
          return (new Date(this.modelValue)).toISOString().slice(0,16);
      }
    },
  },

  methods: {
    valueChange(event) {
      let value = event.target.value !== '' ? event.target.valueAsNumber : Date.parse(new Date(0));
      this.$emit('update:modelValue', value);
    },
  }

};
</script>

<template>
  <UiInput :type="type" :modelValue="value" @change="valueChange($event)">
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </UiInput>
</template>

<script>
import UiInput from './UiInput.vue';

export default {
  name: 'UiInputDate',

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
      const date = (new Date(this.modelValue)).toISOString();
      switch (this.type) {
        case 'date':
          return date.slice(0, 10);
        case 'time':
          return date.slice(11, 16);
        default:
          return date.slice(0, 16);
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

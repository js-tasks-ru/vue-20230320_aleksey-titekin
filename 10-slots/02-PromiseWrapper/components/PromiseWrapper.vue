<template>
  <slot :name="status" :result="result" :error="error" />
</template>

<script>
export default {
  name: 'PromiseWrapper',

  data() {
    return {
      status: 'pending',
      result: null,
      error: null,
    }
  },

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },

  watch: {
    promise: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.status = 'pending';
        newValue
          .then(
            (result) => {
              this.result = result;
              this.status = 'fulfilled';
            }
          )
          .catch(
            (error) => {
              this.error = error;
              this.status = 'rejected';
            }
          )
      }
    }
  },

};
</script>

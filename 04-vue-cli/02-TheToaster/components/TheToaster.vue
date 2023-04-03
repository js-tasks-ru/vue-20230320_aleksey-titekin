<template>
  
    <div class="toasts">
      <UiToast v-for="toast in toastsArr" :styleToast="toast.styleToast" :message="toast.message" />
    </div>

</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  data() {
    return {
      toastsArr: new Array,
    }
  },

  components: { UiToast },

  methods: {
    success(message) {
      const toast = {};
      toast.styleToast = 'success';
      toast.message = message;
      this.toastsArr.push(toast)      
    },

    error(message) {
      const toast = {};
      toast.styleToast = 'error';
      toast.message = message;
      this.toastsArr.push(toast)   
    }

  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>

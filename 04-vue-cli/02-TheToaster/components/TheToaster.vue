<template>
  
    <div class="toasts">
      <UiToast v-for="toast in toastsArr" :key="toast.id" :styleToast="toast.styleToast" :message="toast.message" />
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
    success(message, timeout = 5000 ) {
      const toast = {};
      toast.id = Date.now();
      toast.styleToast = 'success';
      toast.message = message;
      this.toastsArr.push(toast);
      setTimeout(this.removeToast,timeout,toast.id);      
    },

    error(message, timeout = 5000) {
      const toast = {};
      toast.id = Date.now();
      toast.styleToast = 'error';
      toast.message = message;
      this.toastsArr.push(toast);
      setTimeout(this.removeToast,timeout,toast.id);  
    },

    removeToast(id) {
      let i = this.toastsArr.findIndex(toast => toast.id === id);
      this.toastsArr.splice(i, 1);
    },

  }
}
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

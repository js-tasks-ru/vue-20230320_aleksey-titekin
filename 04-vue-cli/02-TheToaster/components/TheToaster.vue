<template>
  
    <div class="toasts">
      <UiToast v-for="[key,toast] in toastsArr" :key="key" :styleToast="toast.styleToast" :message="toast.message" />
    </div>

</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  data() {
    return {
      toastsArr: new Map(),
    }
  },

  components: { UiToast },

  methods: {
    success(message, timeout = 5000 ) {
      const toast = {};
      const id = Date.now();
      toast.styleToast = 'success';
      toast.message = message;

      this.toastsArr.set(Date.now(),toast);
      setTimeout(this.removeToast,timeout,id);      
    },

    error(message, timeout = 5000) {
      const toast = {};
      const id = Date.now();
      toast.styleToast = 'error';
      toast.message = message;
      
      this.toastsArr.set(Date.now(),toast);
      setTimeout(this.removeToast,timeout,id);  
    },

    removeToast(id) {
      this.toastsArr.delete(id);
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

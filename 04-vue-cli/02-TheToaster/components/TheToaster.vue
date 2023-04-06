<template>
  
    <div class="toasts" >
      <UiToast v-for="[key,toast] in toastsMap" :key="key" :styleToast="toast.styleToast" :message="toast.message" />
    </div>

</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  data() {
    return {
      toastsMap: new Map(),
      id: 0,
    }
  },

  components: { UiToast },

  methods: {
    success(message) {
      this.сreateToast('success', message, 5000);
    },

    error(message) {
      this.сreateToast('error', message, 5000);
    },

    getNewID() {
      if (this.toastsMap.length != 0) {
        this.id++
      } else {
        this.id = 1
      }
      return this.id;
    },

    сreateToast(style, message, timeout) {
      const toast = {};
      const id = this.getNewID();
      toast.styleToast = style;
      toast.message = message;
      this.toastsMap.set(id,toast);
      setTimeout(this.removeToast,timeout,id);  
    },

    removeToast(id) {
      this.toastsMap.delete(id);
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

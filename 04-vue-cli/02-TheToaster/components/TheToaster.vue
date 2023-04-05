<template>
  
    <div class="toasts" v-if="isArray">
      <UiToast v-for="toast in toastsArr" :key="toast.id" :styleToast="toast.styleToast" :message="toast.message" />
    </div>  
    <div class="toasts" v-if="!isArray">
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
      toastsArr: new Array,
      isArray: true,
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

    сreateToast(style, message, timeout) {
      const toast = {};
      const id = Date.now();
      toast.id = id;
      toast.styleToast = style;
      toast.message = message;
      this.toastsMap.set(id,toast);
      this.toastsArr.push(toast);
      setTimeout(this.removeToast,timeout,id);  
    },

    removeToast(id) {
      this.toastsMap.delete(id);

      const pos = this.toastsArr.findIndex(toast => toast.id = id);
      this.toastsArr.splice(pos,1);
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

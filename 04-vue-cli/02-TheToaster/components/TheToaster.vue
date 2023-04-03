<template>
  <div class="toasts">
    <div :class="{'toast toast_success': isSuccess, 'toast toast_error': isError}">
      <UiIcon class="toast__icon" :icon="isSuccess ? 'check-circle' : 'alert-circle'" />
      <span>{{ message }}</span>
    </div>
<!--
    <div class="toast toast_error">
      <UiIcon class="toast__icon" icon="alert-circle" />
      <span>Error Toast Example</span>
    </div>
-->    
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToaster',

  data() {
    return {
      message: String,
      isSuccess: {
        type: Boolean,
        default: false,
      },
      isError: {
        type: Boolean,
        default: false,
      }
    }
  },

  components: { UiIcon },

  methods: {
    success(message) {
      this.isSuccess = true;
      this.isError = false;
      this.message = message;
    },

    error(message) {
      this.isSuccess = false;
      this.isError = true;
      this.message = message;
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

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>

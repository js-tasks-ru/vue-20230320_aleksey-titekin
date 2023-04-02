<template>
  <div class="form-group" :class="[{ classInline: inline }]">
    <!-- form-group_inline -->
    <UiContainer> 
      <label class="form-group__label">{{ label }}</label>
    <!-- CONTENT -->
    </UiContainer>
  </div>
</template>

<script>
import UiContainer from './UiContainer';

export default {
  name: 'UiFormGroup',

  data() {
    return {
      classInline: 'form-group_inline',
    }
  },

  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,      
    }
  },

  components: {
    UiContainer
  },

};
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-group__label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>

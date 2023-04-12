<template>
  <div class="image-uploader">
    <label class="image-uploader__preview" :class="{ 'image-uploader__preview-loading': isLoading }" :style="imageLink">
      <span class="image-uploader__text">{{ status }}</span>
      <input type="file" accept="image/*" class="image-uploader__input" ref="inputFile" v-bind="$attrs"
        @change="loadImage($event.target.files[0])" @click="removeImage($event)" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',

  data() {
    return {
      image : null,
      isLoading: false,
      status: this.baseStatus(),
    }
  },

  inheritAttrs: false,

  props: {
    preview: {
      type: String,
      default: null,
    },
    uploader: Function,
  },

  emits: ['select', 'remove', 'error', 'upload'],

  computed: {

    imageLink() {
      const link = this.image ? this.image : this.preview;
      return link != null ? `--bg-url: url(${link})` : null;
    },
  },

  watch: {
    image() {
      this.status = this.baseStatus();
    },

    preview() {
      this.image = this.preview;
    },

    isLoading(newValue) {
      this.status = newValue ? 'Загрузка...' : this.baseStatus();
    }
  },

methods: {
    baseStatus() {
      return this.image ? 'Удалить изображение' : 'Загрузить изображение';
    },

    async loadImage(file) {
    if (this.isLoading) return;
    this.$emit('select', file);
    try {
      this.isLoading = true;
      if (this.uploader) {
        const result = await this.uploader(file);
        this.image = result.image;
        this.$emit('upload', result);
      } else {
        this.image = URL.createObjectURL(file);
      }
    } catch (err) {
      this.$emit('error', err);
      this.$refs.inputFile.value = null;
    }
    this.isLoading = false;
  },

  removeImage(event) {
    if (this.isLoading) return;
    if (this.image != null) {
      event.preventDefault();
      this.$emit('remove');
      this.image = null;
      this.$refs.inputFile.value = null;
    }
  }

}

};
</script>

<style scoped>
.image-uploader {}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>

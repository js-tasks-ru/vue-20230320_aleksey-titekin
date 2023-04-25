<template>
  <div class="pagination-container">
    <!-- Контент страницы -->
    <slot  v-for="item in localItems" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    localItems() {
      const start = (this.page-1)*this.perPage;
      return this.items.slice(start,start+this.perPage);
    },
  }
};
</script>

<style></style>

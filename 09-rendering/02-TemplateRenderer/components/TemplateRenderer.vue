<script>
import { compile } from 'vue';

export default {
  name: 'TemplateRenderer',

  props: {
    template: {
      type: String,
      required: true,
    },

    bindings: {
      type: Object,
      default: () => ({}),
    },

    components: {
      type: [Object, Array],
      default: () => [],
    },
  },

  components: {},

  beforeMount() {
    Object.assign(this.$options.components, this.components);
  },

  render(...args) {
    return compile(this.template).apply(this, args)
  },

};
</script>

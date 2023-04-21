<script>
import { compile, defineAsyncComponent  } from 'vue';

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

  render(...args) {
    console.log(args)
    return compile(this.template).apply(this, args)
  },

};
</script>

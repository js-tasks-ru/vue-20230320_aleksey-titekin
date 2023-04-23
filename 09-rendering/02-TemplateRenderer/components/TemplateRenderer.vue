<script>
import { h, compile, defineAsyncComponent  } from 'vue';

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


  beforeMount() {
    //this.$options.components = this.components;
    this.$options.bindings = this.bindings;
  },

  render(...args) {
    //this.$options.components = this.components;
    //this.$options.bindings = this.bindings;
    //const renderFunction = compile(this.template);

    return compile(this.template).apply(this, args)
    //return renderFunction.apply(this, args)
  },
  

};
</script>

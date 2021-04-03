import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExampleOne',

  props: {
    msg: {
      type: String,
    },
  },

  setup(prop) {
    return () => (
      <div class="ExampleOne">
        <h1>Example component on TSX</h1>
        {prop.msg && <p>Message: {prop.msg}</p>}
      </div>
    )
  },
});

import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ExampleOne',

  props: {
    msg: {
      type: String,
    },
    obj: {
      type: Object as PropType<{ name: string }>,
      required: true,
    },
  },

  setup(prop) {
    return () => (
      <div class="ExampleOne">
        <h1>Example component on TSX</h1>
        {prop.msg && <p>Message: {prop.msg}</p>}
        <p>Obj.name: "{prop.obj.name}"</p>
      </div>
    )
  },
});

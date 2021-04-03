import { defineComponent } from 'vue';
import ExampleOne from '@/components/ExampleOne'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',

  setup() {
    return () => (
      <div class="home">
        <img alt="Vue logo" src={require('../assets/logo.png')} />
        <ExampleOne
          msg="Welcome to Your Vue.js + TypeScript + TSX App"
          obj={{ name: 'name' }}
          items={[{ id: 1, name: 'item 1' }, { id: 2, name: 'item 2'}, { id: 3, name: 'item 3'}]}
          onClick={(num) => alert(num.toString())}
          slotWrapItem={(str, num) => num % 2 === 0 ? <b>{str}</b> : <i>{str}</i>}
        />
      </div>
    )
  },
});

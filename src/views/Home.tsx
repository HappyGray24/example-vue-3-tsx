import { defineComponent } from 'vue';
import ExampleOne from '@/components/ExampleOne'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',

  setup() {
    return () => (
      <div class="home">
        <img alt="Vue logo" src={require('../assets/logo.png')} />
        <ExampleOne msg="Welcome to Your Vue.js + TypeScript + TSX App" />
      </div>
    )
  },
});

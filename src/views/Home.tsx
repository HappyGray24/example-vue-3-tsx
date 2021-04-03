import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',

  setup() {
    return () => (
      <div class="home">
        <img alt="Vue logo" src={require('../assets/logo.png')} />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      </div>
    )
  },
});

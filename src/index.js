import Vue from 'vue';
import App from './App.vue';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.component('vue-carousel', VueCarousel);
new Vue({
  el: '#app',
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
});

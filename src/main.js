// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header,Search,Cell,Button,Swipe, SwipeItem, InfiniteScroll } from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(InfiniteScroll.name, InfiniteScroll);
Vue.use(VueAxios, axios);
Vue.use(InfiniteScroll);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';
import '@/assets/css/styles.css';
import api from './services/api';
import Carousel3d from 'vue-carousel-3d';
import store from './store';


Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Carousel3d);


new Vue({
  render: h => h(App),
  router: routes,
  store,

}).$mount('#app');

routes.afterEach(() => {
	window.scrollTo(0, 0);
});


// new VueRouter({
//   mode: 'history', // require service support
//   scrollBehavior(to, from, savedPosition) {
//     const scrollPos = {
//       top: to.meta.scrollTop,
//       // left: 0
//       left: to.meta.scrollLeft,
//     }
//     return savedPosition || scrollPos || { top: 0, left: 0 }
//   },

// })

// routes.beforeEach(async (to, from, next) => {
//   // 離開頁面後，紀錄捲軸縱軸 (Y) 位置,橫軸 (X) 位置
//   from.meta.scrollTop = window.scrollY
//   from.meta.scrollLeft = window.scrollX
//   next()
// })

// routes.afterEach((to) => {
//   //window.scrollTo(0, 0);
//   // 頁面移動到上次瀏覽的位置
//   setTimeout(() => {
//     window.scrollTo(to.meta.scrollLeft, to.meta.scrollTop),{behavior: 'smooth'}
//   }, 300)
// })


// window.addEventListener("popstate", function () {
//   routes.afterEach((to) => {
//     setTimeout(() => {
//       window.scrollTo(to.meta.scrollLeft, to.meta.scrollTop), { behavior: 'smooth' }
//     }, 300)
//   })
// });

window.addEventListener("popstate", function () {
  window.scrollTo(0, 0);
});


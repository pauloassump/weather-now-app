import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

Vue.directive('colorTemp', {
  bind(el, binding) {
    el.style.color = binding.value
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

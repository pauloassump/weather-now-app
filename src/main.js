import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

Vue.directive('colorTemp', {
  bind(el, binding) {
    el.style.color = binding.value
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

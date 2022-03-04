import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'
import ViewWeather from '@/components/ViewWeather'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomePage},
        { path: '/temperaturas', component: ViewWeather}
    ]
})
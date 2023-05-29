import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import RestaurantPage from './components/pages/RestaurantPage.vue'

/**
 * 
 * initialize Router
 * 
 */

const routes = [
    { path: '/', component: HomePage },
    { path: '/restaurant', component: RestaurantPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

/**
 * 
 * initialize App
 * 
 */

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app')

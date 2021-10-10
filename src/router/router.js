import Vue from 'vue'
import Router from 'vue-router'
import vList from '../components/v-list'
import vCart from '../components/cart/v-cart'

Vue.use(Router)

let router = new Router({
    routes:
        [
            {
                path: '/',
                name: 'catalog',
                component: vList
            },
            {
                path: '/cart',
                name: 'cart',
                component: vCart,
                props: true
            },

        ]
})



export default router
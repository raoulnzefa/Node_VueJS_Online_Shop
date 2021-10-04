import Vue from 'vue'
import Router from 'vue-router'
import vList from '../components'

Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/',
        name: 'catalog',
        component: vList
    }]
})



export default
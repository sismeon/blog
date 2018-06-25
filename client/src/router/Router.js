import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'

Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]
})
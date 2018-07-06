import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import About from '@/components/About'

Vue.use(VueRouter)

var routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },{
        path: "/post",
        name: "Post",
        component: Post
    },{
        path: "/about",
        name: "About",
        component: About
    }
]

export default new VueRouter({
    routes,
    mode: "history"
})
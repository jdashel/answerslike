import Vue from 'vue'
import Router from 'vue-router'
import Threads from '@/components/Threads'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Threads',
            component: Threads,
        },
        {
            path: '/user',
            name: 'User',
            component: User,
        },
    ],
});

import Home from './components/Home.vue'
import Blogs from './components/Blogs.vue'
import Projects from './components/Projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Blogs',
        component:Blogs,
        path:'/blogs'
    },
    {
        name:'Projects',
        component:Projects,
        path:'/projects'
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
import Home from './components/Home.vue'
import Blogs from './components/Blogs.vue'
import Projects from './components/Projects.vue'
import Bloga from './components/Bloga'
import Blogb from './components/Blogb'
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
    {
        name:'Bloga',
        component:Bloga,
        path:'/Bloga'
    },
    {
        name:'Blogb',
        component:Blogb,
        path:'/Blogb'
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
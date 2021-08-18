import Home from './components/Home.vue'
import Blogs from './components/Blogs.vue'
import Projects from './components/Projects.vue'
import Bloga from './components/Bloga'
import Blogb from './components/Blogb'
import Blogc from './components/Blogc'
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
    {
        name:'Blogc',
        component:Blogc,
        path:'/Blogc'
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
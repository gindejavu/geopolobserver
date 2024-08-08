// 管理路由
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false });
// 导入 layout
import layout from '@/views/layout/index.vue'
let router = createRouter({
  // 设置路由模式
  history: createWebHistory(),
  // 设置路由对象
  routes: [
    {
      path: '/', component: layout,
      children: [
        { path: '', component: () => import('@/views/home/index.vue') },
        { path: '/our-values', component: () => import('@/views/OurValues/index.vue') },
        { path: '/our-story', component: () => import('@/views/OurStory/index.vue') },
        { path: '/what-we-do', component: () => import('@/views/WhatWeDo/index.vue') },
        { path: '/policy-analysis', component: () => import('@/views/WhatWeDo/PolicyAnalysis.vue') },
        { path: '/policy-advisory', component: () => import('@/views/WhatWeDo/PolicyAdvisory.vue') },
        { path: '/communications-strategy', component: () => import('@/views/WhatWeDo/CommunicationsStrategy.vue') },
        { path: '/contact-us', component: () => import('@/views/home/ContactUs.vue') },
        { path: '/news', component: () => import('@/views/news/index.vue') },
        { path: '/news/detail', component: () => import('@/views/news/detail.vue') },
        { path: '/thesis', component: () => import('@/views/thesis/index.vue') },
        { path: '/books', component: () => import('@/views/books/index.vue') },
      ]
    },
  ],

})

// 在路由切换前显示进度条
router.beforeEach((to, from, next) => {
  NProgress.start(); //进度条开始
  next();
});

// 在路由切换后结束进度条
router.afterEach(() => {
  NProgress.done(); //进度条结束
});

// 暴露路由对象
export default router
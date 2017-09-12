import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import categories from '@/components/categories/categories'
import archives from '@/components/archives/archives'
import tags from '@/components/tags/tags'
import about from '@/components/about/about'
import articleDetails from '@/components/article_details/article_details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/categories',
      name: 'categories',
      component: categories
    },
    {
      path: '/archives',
      name: 'archives',
      component: archives
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: articleDetails
    }
  ]
})

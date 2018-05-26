import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import HelloWorld from '@/components/HelloWorld'
import Azunyan from '@/components/Azunyan'
import Movie from '@/components/Movie'
import NotFound from '@/components/NotFound'
import Form from '@/components/Form'
import Member from '@/components/Member'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Azunyan',
      component: Azunyan
    },
    {
      path: '/kon-movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Form
    },
    {
      path: '/user/:id',
      component: Member,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }

  ]
})

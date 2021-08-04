import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from '../components/Cart.vue'
import Basket from '../components/Basket.vue'
import vMainPage from '../components/maine-page/v-main-page'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component:vMainPage

      

    },
    {
      path: '/catalog',
      name: 'Catalog',
      component:Card
    },
    {
      path: '/cart',
      name: "Basket",
      component: Basket,
      props:true
    },

  ]
})

export default router

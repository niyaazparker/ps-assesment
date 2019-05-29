import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import CartCheckout from '@/components/CartCheckout';
import GetCream from '@/components/getCream';
import Giftvouchers from '@/components/getGiftvouchers';
import Oralsuppliments from '@/components/oralsupliments';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
    {
      path: '/creams',
      name: 'Cream',
      component: GetCream,
    },
    {
      path: '/giftvouchers',
      name: 'Giftvouchers',
      component: Giftvouchers,
    },
    {
      path: '/oralsuppliments',
      name: 'Oral supliments',
      component: Oralsuppliments,
    },
    {
      path: '/shopbrands',
      name: 'shopbrands',
      component: () => import('./views/Shopbrands.vue')
    }
  ]
})


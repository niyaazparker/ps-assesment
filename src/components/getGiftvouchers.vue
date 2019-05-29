<template>

<div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click.native="showPopupCart()">
         Cart
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
      </btn>
      <transition name="appear">
        <popupcart class="cart" v-if="getPopupCart"/>
      </transition>
    </mainMenu>
    <transition name="leave">
      <listOfProducts :products="getGiftvouchers"/>
    </transition>
    <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import listOfProducts from './ListOfProducts';
import mainMenu from '@/components/Menu';


import btn from '@/components/Btn';
import popupcart from '@/components/Popupcart';
import maskBg from '@/components/Mask';

export default {
  components: {
    listOfProducts,
    mainMenu,
    btn,
    popupcart,
    maskBg,
  },
methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getGiftvouchers',
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
  
};
</script>

<style>
</style>


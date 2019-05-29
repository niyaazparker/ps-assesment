<template>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
       <div class="product-price">
        <span>R {{ product.price }}, 00</span>
      </div>

      <btn btnColor="btn btn-large btn-sucess cartBtn" @click.native="addProductToCart(product)">
        <i class="fas fa-shopping-basket mr-2"></i> Add
      </btn>
      <img :src="product.image" alt="">
      <router-link to="/product-details">
        <h2 class="product-name"
            @click="addCurrentProduct(product)">
          {{ product.name }}
        </h2>
      </router-link>
     
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';

export default {
  props: ['products'],

  components: {
    btn,
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped lang="scss">
   
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 0;
    overflow: visible;
    
  }

  .product {
    background-color: $white;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    flex-basis: auto;
    flex-wrap: nowrap;
    position: relative;
    img {
      width: 245px;
      height: auto;
    }
  }

  .product-name {
    font-size: $size-4;
    font-weight: normal;
    color: $tertiary-color;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    font-size: 25px;
    color: $tertiary-color;
  }

</style>


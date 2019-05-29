import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    giftvouchers: [
      {
        name: 'Skin Renewal Gift Voucher',
        price: 100.00,
        image: 'assets/Skin-Renewal-Gift-Voucher-300x300.png',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
     
    ],

    cream: [
      {
        name: 'La melle Research Laboratories',
        price: 130.00,
        image: 'assets/Lamelle-Clarity-Active-Control-300x300.jpg',
        stars: 3.4,
        totalReviews: 20,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],
    oralsuppliments: [
      
      {
        name: 'Oral Suppliment Alpha Lipoic Acid',
        price: 175.00,
        image: 'assets/Alpha-Lipoic-Acid-300x300.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Oral Suppliment Apple Cider Vinegar',
        price: 175.00,
        image: 'assets/Apple-Cider-Vinegar-300x300.jpg',
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getGiftvouchers: state => state.giftvouchers,
    getCream: state => state.cream,
    oralsuppliments: state => state.oralsuppliments,
    getAllProducts: state => state.giftvouchers.concat(state.cream).concat(state.oralsuppliments),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});

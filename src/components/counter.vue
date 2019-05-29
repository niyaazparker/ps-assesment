<template>
   <ul id="counter">
      <li><router-link to="/">Login</router-link></li>
      <li><router-link to="/">Register</router-link></li>
      <li><a @click="incrementCounter"><i class="fas fa-cart-plus"></i></a></li>
      <li><a @click="decrementCounter(0)"><i class="fas fa-shopping-cart"></i></a></li>
      <li class="counter"><span>{{counter}}</span></li>
  </ul>
</template>

<script>
export default {
    name:'counter',
     data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter(decreaseLimit) {
      if (this.counter > decreaseLimit)
      this.counter--;
    }
  }
}
</script>


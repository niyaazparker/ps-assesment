<template>
  <button :class="btnColor">
    <slot></slot>
    <img v-if="cartIcon" src="../assets/images/cart.svg" alt="Cart Icon">
  </button>
</template>

<script>
export default {
  props: ['btnColor', 'cartIcon'],
};
</script>

<style scoped lang="scss">
  .btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 0;
    color: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .btn-small {
    padding: .5rem .8rem;
  }

  .btn-medium {
    padding: .7rem 1rem;
  }

  .btn-large {
    padding: .7rem 1rem;
    font-size: $size-3;
  }

  .cartBtn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .cartBtn:hover {
    text-decoration: underline;
  }

  .btn-info {
    background-color: $green-2;
    padding: 0.6rem 1.8rem;
    border-radius: 100px;
  }

  .btn-sucess {
    background-color: $tertiary-color;
  }

  .btn-danger {
    background-color: #e74c3c;
  }

  .btn img {
    max-width: 20px;
    margin-left: .5em;
  }

</style>

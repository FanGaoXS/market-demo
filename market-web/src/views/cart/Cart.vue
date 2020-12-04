<template>
  <div>

    <nav-bar class="cart-nav-bar">
      <div slot="center">{{title}}({{cartNumber}})</div>
    </nav-bar>

    <h2>{{title}}</h2>
  </div>
</template>

<script>
  import NavBar from "components/common/navber/NavBar";
  export default {
    name: "Cart",
    components: {
      NavBar
    },
    data() {
      return {
        title: '购物车',
        cartNumber: 0
      }
    },
  }
</script>

<style scoped>
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

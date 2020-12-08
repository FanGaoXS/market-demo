<template>
  <div>

    <cart-nav :pageName="title"></cart-nav>

    <h2>{{title}}</h2>
  </div>
</template>

<script>

  import CartNav from "./childComponents/CartNav";

  export default {
    name: "Cart",
    components: {
      CartNav
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

</style>

<template>
  <div>
    <nav-bar class="cart-nav-bar">
      <div slot="center">{{pageName}}({{0}})</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navber/NavBar";

  export default {
    name: "CartNav",
    props: {
      pageName: {
        type: String,
        default: '默认页'
      },
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

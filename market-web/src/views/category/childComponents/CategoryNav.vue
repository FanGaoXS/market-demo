<template>
  <div>
    <nav-bar class="category-nav-bar">
      <div slot="center">{{pageName}}</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "CategoryNav",
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
  .category-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

<template>
  <div>

    <category-nav :pageName="title"></category-nav>

    <h2>{{title}}</h2>

  </div>
</template>

<script>

  import CategoryNav from "./navbar/CategoryNav";

  export default {
    name: "Category",
    components: {
      CategoryNav
    },
    data() {
      return {
        title: '分类'
      }
    },
  }
</script>

<style scoped>
  .category-nav-bar {
    background-color: var(--color-tint);
   color: #fff;
  }
</style>

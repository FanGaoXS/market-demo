<template>
  <div>

    <nav-bar class="category-nav-bar">
      <div slot="center">{{title}}</div>
    </nav-bar>

    <h2>{{title}}</h2>

  </div>
</template>

<script>
  import NavBar from "components/common/navber/NavBar";
  export default {
    name: "Category",
    components: {
      NavBar
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

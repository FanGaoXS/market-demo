<template><!-- 主页顶部导航栏 -->
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="center">{{pageName}}</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "HomeNav",
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
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

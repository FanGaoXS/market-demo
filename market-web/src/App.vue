<template>
  <div>

    <router-view></router-view>

    <!-- 底下导航栏 -->
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
  import MainTabBar from "components/content/tabbar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>

<template>
  <div>

    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav-bar">
      <div slot="center">{{title}}</div>
    </nav-bar>

    <!-- 内容 -->
    <h2>{{title}}</h2>

  </div>
</template>

<script>
  import {getHomeMultiData} from "network/homeRequest";
  import NavBar from "components/common/navber/NavBar";
  getHomeMultiData().then(function (res) {
    console.log(res);
  }).catch(function (err) {
    console.log(err);
  });
  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        title: '主页'
      }
    },
  }
</script>

<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

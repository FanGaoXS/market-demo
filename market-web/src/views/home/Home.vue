<template>
  <div>

    <!-- 顶部导航栏（将当前页面名称传递给子组件）-->
    <home-nav :pageName="title"></home-nav>

    <!-- 轮播图（并且将banner数组传递给子组件） -->
    <home-swiper :bannerList="banner.list"></home-swiper>

    <!-- 推荐流（并且将recommendList传递给子组件） -->
    <home-recommend-view :recommendList="recommend.list"></home-recommend-view>

    <!-- 中间内容 -->
    <h2>{{title}}</h2>

  </div>
</template>

<script>

  import HomeNav from "./childComponents/HomeNav";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommendView from "./childComponents/HomeRecommendView";

  import {
    getHomeMultiData
  } from "network/homeRequest";


  export default {
    name: "Home",
    components: {
      HomeNav,
      HomeSwiper,
      HomeRecommendView
    },
    data() {
      return {
        title: '主页',
        banner: null,
        dKeyword: null,
        keyword: null,
        recommend: null,
      }
    },
    // 生命周期函数：created（组件被创建时调用）
    created() {
      // 在then中处理从后端得到的HomeMultiData数据
      // res使用箭头函数，提升this的作用域，使其等同于外部的this
      // （也可以利用that先获取到this的方式）
      getHomeMultiData().then(res => {
        // 将res.data中的数据分别赋值给组件中的数据
        this.banner=res.data.banner;
        this.dKeyword=res.data.dKeyword;
        this.keyword=res.data.keywords;
        this.recommend=res.data.recommend;
      });
    }
  }
</script>

<style scoped>

</style>

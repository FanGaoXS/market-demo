<template>
  <div id="home">

    <!-- 顶部导航栏（将当前页面名称传递给子组件）-->
    <home-nav :pageName="title"></home-nav>

    <!-- 轮播图（并且将banner数组传递给子组件） -->
    <home-swiper :bannerList="bannerList"></home-swiper>

    <!-- 推荐流（并且将recommendList传递给子组件） -->
    <home-recommend-view :recommendList="recommendList"></home-recommend-view>

    <!-- 特征流显示 -->
    <home-feature-view></home-feature-view>

    <!-- 商品流切换栏 -->
    <tab-control :titleList="['流行','新款','精选']"></tab-control>

    <!-- 中间内容 -->
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>

  import HomeNav from "./childComponents/HomeNav";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommendView from "./childComponents/HomeRecommendView";
  import HomeFeatureView from "./childComponents/HomeFeatureView";

  import TabControl from "components/common/tabControl/TabControl";

  import {
    getHomeMultiData
  } from "network/homeRequest";



  export default {
    name: "Home",
    components: {
      HomeNav,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl
    },
    data() {
      return {
        title: '主页',
        bannerList: [],
        dKeywordList: [],
        keywordList: [],
        recommendList: [],
      }
    },
    // 生命周期函数：created（组件被创建时调用）
    created() {
      // 在then中处理从后端得到的HomeMultiData数据
      // res使用箭头函数，提升this的作用域，使其等同于外部的this
      // （也可以利用that先获取到this的方式）
      getHomeMultiData().then(res => {
        // 将res.data中的数据分别赋值给组件中的数据
        this.bannerList=res.data.banner.list;
        this.dKeywordList=res.data.dKeyword.list;
        this.keywordList=res.data.keywords.list;
        this.recommendList=res.data.recommend.list;
      });
    }
  }
</script>

<style scoped>

  /* 将home组件整体下拉44px，免得覆盖顶部导航栏 */
  #home {
    padding-top: 44px;
  }

  /* tab-control滑动到一定位置停下 */
  .tab-control {
    position: sticky;
    top: 44px;
  }

</style>

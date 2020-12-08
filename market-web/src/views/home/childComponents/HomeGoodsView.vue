<template>
  <div class="home-goods-view">
    <div class="tab-control"><!-- 分类选择栏（从父组件接收到的titleList传递给子组件） -->
      <tab-control :titleList="titleList"></tab-control>
    </div>
  </div>
</template>

<script>

  import TabControl from "components/common/tabControl/TabControl";
  import GoodsView from "components/common/goods/GoodsView";

  export default {
    name: "HomeGoodsView",
    components: {
      TabControl,
      GoodsView
    },
    props: {
      titleList: {
        type: Array,
      },
    },
  }
</script>

<style scoped>
  /* tab-control滑动到一定位置停下 */
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>

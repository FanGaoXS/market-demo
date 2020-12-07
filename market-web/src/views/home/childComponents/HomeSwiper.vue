<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in bannerList" :key="index">
        <!-- 图片指向的地址 -->
        <a :href="item.link">
          <!-- 轮播图的地址 -->
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

  // 引入Swiper和SwiperItem
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper';

  export default {
    name: "HomeSwiper",
    props: {
      bannerList: {
        type: Array,
      },
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>

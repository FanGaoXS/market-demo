<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titleList"
      @click="tabItemClick(index)"
      :class="{'active':currentIndex===index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titleList: {
        type: Array,
        default: [
          'title1',
          'title2',
          'title3',
        ]
      },
    },
    methods: {
      tabItemClick(index) {
        this.currentIndex=index;
      }
    },
  }
</script>

<style scoped>

  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  /* tab-control被选中的时候文字会有额外效果 */
  .active {
    color: var(--color-high-text);
  }

  /* tab-control被选中的时候底下有颜色效果 */
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>

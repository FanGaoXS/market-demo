<template>
  <div class="nav-bar">

    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

  /* 导航栏整体占位 */
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;

    /* 导航栏固定到页面顶部 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /* 提高导航栏的层级（到最顶层，否则会被覆盖） */
    z-index: 9;
  }

  /* 导航栏左右占位 */
  .left, .right {
    width: 60px;
  }

  /* 导航栏中间占位 */
  .center {
    flex: 1;
  }
</style>

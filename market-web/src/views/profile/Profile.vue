<template>
  <div>

    <profile-nav :pageName="title"></profile-nav>

    <h2>{{title}}</h2>
  </div>
</template>

<script>

  import ProfileNav from "./childComponents/ProfileNav";

  export default {
    name: "Profile",
    components: {
      ProfileNav
    },
    data() {
      return {
        title: '我的'
      }
    },
  }
</script>

<style scoped>

</style>

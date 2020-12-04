<template>
  <div>

    <nav-bar class="profile-nav-bar">
      <div slot="center">我的</div>
    </nav-bar>

    <h2>{{title}}</h2>
  </div>
</template>

<script>
  import NavBar from "components/common/navber/NavBar";
  export default {
    name: "Profile",
    components: {
      NavBar
    },
    data() {
      return {
        title: '我的'
      }
    },
  }
</script>

<style scoped>
  .profile-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

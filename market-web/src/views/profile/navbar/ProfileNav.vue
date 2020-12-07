<template>
  <div>
    <nav-bar class="profile-nav-bar">
      <div slot="center">{{pageName}}</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navber/NavBar";

  export default {
    name: "ProfileNav",
    props: {
      pageName: {
        type: String,
        default: '默认页'
      },
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .profile-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

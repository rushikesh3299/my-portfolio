<template>
  <Header></Header>
  <router-view></router-view>
  <Foot></Foot>
</template>

<script>
import Header from "./components/Header.vue";
import Foot from "./components/Foot.vue";
export default {
  name: "App",
  components: {
    Header,
    Foot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 900px;
  margin: 0 auto;
}
</style>

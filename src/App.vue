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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

:root {
  --text-color: #333;
  --text-color-white: #eee;
  --pure-white-color: #fff;

  --primary-color: #00aaff;
  --primary-color-hover: #0088cc;

  --shadow-color: gray;
  --shadow-color-light: rgb(0 0 0 / 10%);
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: var(--text-color);
}
</style>

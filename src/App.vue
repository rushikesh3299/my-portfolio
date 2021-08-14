<template>
  <Header></Header>
  <router-view></router-view>
  <Foot></Foot>
</template>

<script>
import Header from './components/Header.vue'
import Foot from './components/Foot.vue'
export default {
  name: 'App',
  components:{
      Header,
      Foot
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 900px;
  margin: auto;
}

@media only screen and (max-width: 800px) {
  *{
    font-size: 1.5rem;
  }
}
</style>

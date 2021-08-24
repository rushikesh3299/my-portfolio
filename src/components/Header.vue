<template>
  <div class="container">
    <div class="title-name">
      <h3>Rushikesh Chougule</h3>
    </div>
    <ul class="nav-links">
      <router-link class="links" to="/" >Home</router-link>
      <router-link class="links" to="Blogs">Blogs</router-link>
      <router-link class="links" to="Projects">Projects</router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #5B2C6F;
}

.title-name{
  padding: 1rem;
  display: flex;
}

.title-name h2{
  align-items: center;
}

.nav-links{
  padding: 1rem;
  display: flex;
}

.links{
  color: black;
  padding: 0 1rem;
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .title-name{
    justify-content: center;
    padding-bottom: 0;
  }

  .nav-links{
    justify-content: center;
    padding: 0;
  }

  h3{
    margin-bottom: 0;
    font-size: 1.4em;
  }
}

.links:hover{
  color: dimgray;
  cursor: pointer;
}
</style>

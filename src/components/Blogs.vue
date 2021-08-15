<template>
  <div class="container">
      <div class="blog1 blog">
        <h2 class="blog-title">Headless OS installation on Raspbery Pi</h2>
        <p class="blog-content">Headless OS installation on Raspbery Pi</p>
        <router-link class="blog-link" to="bloga">Read More...</router-link>
      </div>
      <div class="blog2 blog">
        <h2 class="blog-title">LED Interfacing with 8051</h2>
        <p class="blog-content">Headless OS installation on Raspbery Pi</p>
        <router-link class="blog-link" to="blogb">Read More...</router-link>
      </div>
      <div class="blog3 blog">
        <h2 class="blog-title">coming soon</h2>
        <p class="blog-content"></p>
        <router-link class="blog-link" to="#" aria-disabled="">Read More...</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'Blogs',
}
</script>

<style scoped>
.container{
  width: 600px;
  margin: auto;
}

.blog{
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
  border: 2px solid gray;
  border-radius: 10px;
}

.blog-link{
  text-decoration:none;
  color: black;
  background-color: #ddd;
  padding: 0.5rem;
  border-radius: 10px;
}

</style>
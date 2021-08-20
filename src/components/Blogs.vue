<template>
  <div class="container">
      <div class="page-title">
        <h3>See My Blogs</h3>
      </div>
      <div class="blog1 blog">
        <h2 class="blog-title">Portable Programmable Medicine Reminder</h2>
        <p class="blog-content">Elder people or people with Alzheimer’s disease always forgot to take their medicine</p>
        <router-link class="blog-link" to="blogc">Read More...</router-link>
      </div>
      <div class="blog2 blog">
        <h2 class="blog-title">OS Installation On Raspberry Pi</h2>
        <p class="blog-content">Raspberry Pi has become the embedded programmers & students first choice</p>
        <router-link class="blog-link" to="bloga">Read More...</router-link>
      </div>
      <div class="blog3 blog">
        <h2 class="blog-title">LED Interfacing with 8051</h2>
        <p class="blog-content">With the advancement in technology chips are getting fabricated in lesser</p>
        <router-link class="blog-link" to="blogb">Read More...</router-link>
      </div>
      <div class="blog4 blog">
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
  border: 2px solid tomato;
  border-radius: 10px;
}

.blog-link{
  text-decoration:none;
  color: black;
  background-color: #FFD0C6 ;
  padding: 0.5rem;
  border-radius: 10px;
}

.blog-link:hover{
  background-color: #FF8970 ;
}

@media only screen and (max-width: 800px) {
  .container{
    width: 85%;
  }
}

</style>
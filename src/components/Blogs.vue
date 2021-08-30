<template>
  <div class="container">
      <div class="page-title">
        <h3>See My Blogs</h3>
      </div>
      <div class="blog">
        <h2 class="blog-title">Counters In 8051</h2>
        <p class="date-time">Aug 2021 • 4 min read</p>
        <p class="blog-content">Timer/Counter are an integral part of 8051 as well as any of the other microcontrollers.</p>
        <a href="https://hashnode.com/post/counters-in-8051-cksx2ifa10j6ukxs132gsg061" target="_blank" class="blog-link">Read More...</a>
      </div>
      <div class="blog1 blog">
        <h2 class="blog-title">Portable Programmable Medicine Reminder</h2>
        <p class="date-time">Aug 2021 • 5 min read</p>
        <p class="blog-content">Elder people or people with Alzheimer’s disease always forgot to take their medicine</p>
        <router-link class="blog-link" to="blogc">Read More...</router-link>
      </div>
      <div class="blog3 blog">
        <h2 class="blog-title">LED Interfacing with 8051</h2>
        <p class="date-time">Aug 2021 • 4 min read</p>
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
  border: 2px solid #5B2C6F;
  border-radius: 10px;
}

.date-time{
  margin: 0;
  color: #555;
}

.blog-title{
  margin-bottom: .5rem;
}

.blog-link{
  text-decoration:none;
  color: black;
  background-color: #C39BD3 ;
  padding: 0.5rem;
  border-radius: 10px;
}

.blog-link:hover{
  background-color: #A569BD ;
}

@media only screen and (max-width: 800px) {
  .container{
    width: 85%;
  }
}

</style>
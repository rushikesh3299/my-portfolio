<template>
  <div class="container">
    <div class="intro">
      <img src="../assets/myphoto.jpg" alt="img loading">
      <h3>Rushikesh Chougule</h3>
      <h4>The Web Developer</h4>
    </div>
    <div class="technologies">
      <h3>Technologies</h3>
      <p>I am familier with HTML5, CSS3, JavaScript, Git & Web Hosting</p>
    </div>
    <div class="projects">
      <h3>Projects</h3>
      <p>I have developed some projects & deployed online you can see them by clicking below button</p>
      <router-link to="Projects" class="btn">See My Projects</router-link>
    </div>
    <div class="blogs">
      <h3>Blogs</h3>
      <p>I have also written some technical & non-technical blogs you can see them by clicking below buttton</p>
      <router-link to="Blogs" class="btn">Read My Blogs</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'Home',
    components:{
    },
    methods:{
      prjcomp(){
        
      }
    }
}
</script>

<style scoped>
.container{
  text-align: center;
  padding: .5rem;
}

h3{
  margin: 0;
}

img{
  height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding:1rem 0;
}

.technologies{
  background-color: #F4ECF7 ;
  padding: .6rem 0;
  border-radius: 10px;
}

.projects{
  padding: 1rem 0;
  border-radius: 10px;
}

.blogs{
  background-color: #F4ECF7 ;
  padding-bottom: 1.2rem;
  padding-top: .6rem;
  border-radius: 10px;
}

.btn{
  border: none;
  text-decoration: none;
  color: black;
  padding: .6rem;
  border-radius: 10px;
  background-color: #C39BD3;
}

.btn:hover{
  background-color: #A569BD;
}
</style>
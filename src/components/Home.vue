<template>
  <div class="container">
    <div class="intro">
      <h1>Hi there!</h1>
      <h1>I'm <span>Rushikesh</span> An Aspiring Web Developer</h1>
      <p>I am 2020 Batch graduate Learning & Seeking career opportunities in Web Development</p>
    </div>
    <div class="skills">
      <h3>My Skills</h3>
      <div class="skill-boxes">
        <div class="box">
          <img src="html.svg" alt="">
          <p>HTML</p>
        </div>
        <div class="box">
          <img src="css.svg" alt="">
          <p>CSS</p>
        </div>
        <div class="box">
          <img src="js.svg" alt="">
          <p>Javascript</p>  
        </div>
        <div class="box">
          <img src="git.svg" alt="">
          <p>Git</p>  
        </div>
      </div>
    </div>
    <div class="projects">
      <h3>My Projects</h3>
      <p>I have developed some projects & deployed online you can see them by clicking below button</p>
      <router-link to="Projects" class="btn">See My Projects</router-link>
    </div>
    <div class="blogs">
      <h3>My Blogs</h3>
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
  height: 50px;
  padding: .5rem;
  margin: 0 1rem;
}

.intro{
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.intro h1{
  font-weight: 100;
}

h1 span{
  color: #A569BD;
}

.skills{
  background-color: #F4ECF7 ;
  padding: .6rem 0;
  border-radius: 10px;
}

.skill-boxes{
  display: flex;
  justify-content: center;
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
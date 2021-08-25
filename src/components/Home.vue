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
      <div class="project-section">
        <div v-for="prj in prjList" :key="prj.title" class="project-list">
          <h4>{{prj.title}}</h4>
          <p class="prj-date">{{prj.date}}</p>
          <p class="discription">{{prj.discription}}</p>
          <div class="prj-nav-btn">
            <a :href="prj.liveLink" target="_blank">See MyProject</a>
            <a :href="prj.githubLink" target="_blank">See My Code</a>
          </div>
        </div>
      </div>
      <router-link to="Projects" class="btn">See More</router-link>
    </div>
    <div class="blogs">
      <h3>My Blogs</h3>
      <div class="blog1 blog">
        <h2 class="blog-title">Portable Programmable Medicine Reminder</h2>
        <p class="date-time">Aug 2021 • 5 min read</p>
        <p class="blog-content">Elder people or people with Alzheimer’s disease always forgot to take their medicine</p>
        <router-link class="blog-link" to="blogc">Read More...</router-link>
      </div>
      <div class="blog2 blog">
        <h2 class="blog-title">OS Installation On Raspberry Pi</h2>
        <p class="date-time">Aug 2021 • 4 min read</p>
        <p class="blog-content">Raspberry Pi has become the embedded programmers & students first choice</p>
        <router-link class="blog-link" to="bloga">Read More...</router-link>
      </div>
      <router-link to="Blogs" class="btn">See More</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'Home',
    data(){
      return{
        prjList:[
          {
            title:"Emoji Detector",
            date:"July, 2021",
            discription:"An emoji detector app designed in ReactJS",
            liveLink:"https://ejyuy.csb.app/",
            githubLink:"https://github.com/rushikesh3299/neog-emoji-detect"
          },
          {
            title:"Birthday Palindrome",
            date:"August, 2021",
            discription:"An app that will tell you weather your birthday is palindrome or not & the nearest palindrome date according to your birth date",
            liveLink:"https://birthdaypalindrome3299.netlify.app",
            githubLink:"https://github.com/rushikesh3299/birthday-palindrome"
          },
          {
            title:"Stock Profit/Loss",
            date:"August, 2021",
            discription:"An app that calculates profit or loss made in stock market using free api service of AlphaVantage",
            liveLink:"https://stockproloss.netlify.app/",
            githubLink:"https://github.com/rushikesh3299/stock-market-app"
          }
        ]
      }
    },
    components:{
    },
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
  height: 35px;
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

.box p{
  margin: 0;
}

.projects{
  padding: 1rem 0;
  border-radius: 10px;
}

.project-section{
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: left;
  margin-bottom: .5rem;
}

.project-list{
  box-sizing: border-box;
  padding: 1rem;
  border: 2px solid #5B2C6F;
  margin: .5rem;
  border-radius: 10px;
  width: 275px;
  height: 270px;
  position: relative;
}

.prj-date{
  color: #555;
}

.project-list h4, .project-list p{
  margin: .5rem .5rem .5rem 0;
}

.project-list .discription{
  margin-bottom: 1rem;
}

.project-list a{
  display: block;
  text-decoration: none;
  color: black;
  padding: .5rem;
  margin: 1rem 1rem 1rem 0;
  background-color: #C39BD3;
  border-radius: 10px;
  width: 150px;
}

.project-list a:hover{
  background-color: #A569BD;
}

.prj-nav-btn{
  position: absolute;
  bottom: 0;
}


.blogs{
  background-color: #F4ECF7 ;
  padding-bottom: 1.2rem;
  padding-top: .6rem;
  border-radius: 10px;
}

.blog{
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
  border: 2px solid #5B2C6F;
  border-radius: 10px;
  text-align: left;
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

.btn{
  border: 2px solid #C39BD3;
  text-decoration: none;
  color: black;
  padding: .6rem;
  border-radius: 10px;
}

.btn:hover{
  border: 2px solid #555;
}

@media only screen and (max-width: 800px) {
  .project-list a{
    width: 40%;
  }
  .project-list{
    width: 100%;
    height: auto;
  }
  .prj-nav-btn{
    position: static;
  }
}
</style>
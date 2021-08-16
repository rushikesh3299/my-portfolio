<template>
  <div class="container">
      <div class="page-title">
        <h3>See My Projects</h3>
      </div>
      <div v-for="prj in prjList" :key="prj.title" class="project-list">
        <h4>{{prj.title}}</h4>
        <p>{{prj.date}}</p>
        <p class="discription">{{prj.discription}}</p>
        <a :href="prj.liveLink" target="_blank">See MyProject</a>
        <a :href="prj.githubLink" target="_blank">See My Code</a>
      </div>
  </div>
</template>

<script>
export default {
    name:'Projects',
    data(){
      return{
        prjList:[
          {
            title:"How well do you Know me?",
            date:"July, 2021",
            discription:"Quiz designed using vanilla Javascript",
            liveLink:"https://replit.com/@rushikesh3299/markOne#index.js",
            githubLink:"https://github.com/rushikesh3299/neoCamp-markOne"
          },
          {
            title:"How well do you Know India?",
            date:"July, 2021",
            discription:"Quiz designed using vanilla Javascript which tests your knowldge about India",
            liveLink:"https://replit.com/@rushikesh3299/markTwo#index.js",
            githubLink:"https://github.com/rushikesh3299/neoGcamp-markTwo"
          },
          {
            title:"Banana Talk",
            date:"July, 2021",
            discription:"A minions language translation app",
            liveLink:"https://bananatalk3299.netlify.app/",
            githubLink:"https://github.com/rushikesh3299/banana-talk"
          },
          {
            title:"Fun Translator",
            date:"July, 2021",
            discription:"A multiple fun language translator app",
            liveLink:"https://yodatalk3299.netlify.app/",
            githubLink:"https://github.com/rushikesh3299/yoda-talk"
          },
          {
            title:"Emoji Detector",
            date:"July, 2021",
            discription:"An emoji detector app",
            liveLink:"https://ejyuy.csb.app/",
            githubLink:"https://github.com/rushikesh3299/neog-emoji-detect"
          },
          {
            title:"Book recommendation App",
            date:"July, 2021",
            discription:"This app will recommed you a book baced on selected genere.",
            liveLink:"https://fr3ko.csb.app/",
            githubLink:"https://github.com/rushikesh3299/book-recommend"
          },
          {
            title:"Cash Register App",
            date:"August, 2021",
            discription:"An app that will tell you how much change you should return to your customar.",
            liveLink:"https://cashchangeprj.netlify.app",
            githubLink:"https://github.com/rushikesh3299/cash-change-prj"
          },
          {
            title:"Birthday Lucky",
            date:"August, 2021",
            discription:"An app that will tell you weather your birthday is lucky or not.",
            liveLink:"https://birthdaylucky3299.netlify.app",
            githubLink:"https://github.com/rushikesh3299/birthday-lucky"
          },
          {
            title:"Triangle Quiz",
            date:"August, 2021",
            discription:"An app with all functions related to triangle arithmatic.",
            liveLink:"https://PlayWithTriangle.rushikesh3299.repl.co",
            githubLink:"https://github.com/rushikesh3299/play-with-triangle"
          },
          {
            title:"Birthday Palindrome",
            date:"August, 2021",
            discription:"An app that will tell you weather your birthday is palindrome or not.",
            liveLink:"https://birthdaypalindrome3299.netlify.app",
            githubLink:"https://github.com/rushikesh3299/birthday-palindrome"
          },
          {
            title:"Stock Profit/Loss",
            date:"August, 2021",
            discription:"An app that calculates profit or loss made in stock market.",
            liveLink:"https://stockproloss.netlify.app/",
            githubLink:"https://github.com/rushikesh3299/stock-market-app"
          }
        ]
      }
    }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;  
  width: 500px;
  margin: auto;
}

.project-list{
  padding: 1rem;
  border: 2px solid #bbb;
  margin-bottom: .5rem;
  border-radius: 10px;
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
  background-color: #bbb;
  border-radius: 10px;
  width: 150px;
}

.project-list a:hover{
  background-color: #ddd;
}

@media only screen and (max-width: 800px) {
  .container{
    width: 80%;
  }
  .project-list a{
    width: 40%;
  }
}
</style>
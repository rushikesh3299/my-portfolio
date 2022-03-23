<template>
  <div class="container">
    <div class="intro">
      <h1>Hi there!</h1>
      <h1>I'm <span>Rushikesh</span> An Aspiring Web Developer</h1>
      <p>
        I am 2020 Batch graduate Learning & Seeking career opportunities in Web
        Development
      </p>
    </div>
    <div class="skills">
      <h3>My Skills</h3>
      <div class="skill-boxes">
        <div class="box">
          <img src="html.svg" alt="" />
          <p>HTML</p>
        </div>
        <div class="box">
          <img src="css.svg" alt="" />
          <p>CSS</p>
        </div>
        <div class="box">
          <img src="js.svg" alt="" />
          <p>Javascript</p>
        </div>
        <div class="box">
          <img src="git.svg" alt="" />
          <p>Git</p>
        </div>
      </div>
    </div>
    <div class="projects">
      <h3>My Projects</h3>
      <div class="project-section">
        <div v-for="prj in prjList" :key="prj.title" class="project-list">
          <h4>{{ prj.title }}</h4>
          <p class="prj-date">{{ prj.date }}</p>
          <p class="discription">{{ prj.discription }}</p>
          <div class="prj-nav-btn">
            <a :href="prj.liveLink" target="_blank">See MyProject</a>
            <a :href="prj.githubLink" target="_blank">See My Code</a>
          </div>
        </div>
      </div>
      <router-link to="Projects" class="btn">See More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      prjList: [
        {
          title: "SearchApp",
          date: "August, 2021",
          discription:
            "An app which works as search engine using free API from Wikipedia",
          liveLink: "https://rcsearchapp.netlify.app/",
          githubLink: "https://github.com/rushikesh3299/search_app",
        },
        {
          title: "Birthday Palindrome",
          date: "August, 2021",
          discription:
            "An app that will tell you weather your birthday is palindrome or not & the nearest palindrome date according to your birth date",
          liveLink: "https://birthdaypalindrome3299.netlify.app",
          githubLink: "https://github.com/rushikesh3299/birthday-palindrome",
        },
        {
          title: "Stock Profit/Loss",
          date: "August, 2021",
          discription:
            "An app that calculates profit or loss made in stock market using free api service of AlphaVantage",
          liveLink: "https://stockproloss.netlify.app/",
          githubLink: "https://github.com/rushikesh3299/stock-market-app",
        },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 0.5rem;
}

h3 {
  margin: 0;
}

img {
  height: 35px;
  padding: 0.5rem;
  margin: 0 1rem;
}

.intro {
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.intro h1 {
  font-weight: 100;
}

h1 span {
  color: #a569bd;
}

.skills {
  background-color: #f4ecf7;
  padding: 0.6rem 0;
  border-radius: 10px;
}

.skill-boxes {
  display: flex;
  justify-content: center;
}

.box p {
  margin: 0;
}

.projects {
  padding: 1rem 0;
  border-radius: 10px;
}

.project-section {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: left;
  margin-bottom: 0.5rem;
}

.project-list {
  box-sizing: border-box;
  padding: 1rem;
  border: 2px solid #5b2c6f;
  margin: 0.5rem;
  border-radius: 10px;
  width: 275px;
  height: 270px;
  position: relative;
}

.prj-date {
  color: #555;
}

.project-list h4,
.project-list p {
  margin: 0.5rem 0.5rem 0.5rem 0;
}

.project-list .discription {
  margin-bottom: 1rem;
}

.project-list a {
  display: block;
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  margin: 1rem 1rem 1rem 0;
  background-color: #c39bd3;
  border-radius: 10px;
  width: 150px;
}

.project-list a:hover {
  background-color: #a569bd;
}

.prj-nav-btn {
  position: absolute;
  bottom: 0;
}

.blogs {
  background-color: #f4ecf7;
  padding-bottom: 1.2rem;
  padding-top: 0.6rem;
  border-radius: 10px;
}

.blog {
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
  border: 2px solid #5b2c6f;
  border-radius: 10px;
  text-align: left;
}

.date-time {
  margin: 0;
  color: #555;
}

.blog-title {
  margin-bottom: 0.5rem;
}

.blog-link {
  text-decoration: none;
  color: black;
  background-color: #c39bd3;
  padding: 0.5rem;
  border-radius: 10px;
}

.blog-link:hover {
  background-color: #a569bd;
}

.btn {
  border: 2px solid #c39bd3;
  text-decoration: none;
  color: black;
  padding: 0.6rem;
  border-radius: 10px;
}

.btn:hover {
  border: 2px solid #555;
}

@media only screen and (max-width: 800px) {
  .project-list a {
    width: 40%;
  }
  .project-list {
    width: 100%;
    height: auto;
  }
  .prj-nav-btn {
    position: static;
  }
}
</style>
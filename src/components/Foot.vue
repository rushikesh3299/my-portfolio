<template>
  <div class="container">
    <div class="footer">
      <div class="footer-icon">
        <a
          href="https://twitter.com/rushikesh3299"
          target="_blank"
          class="fa fa-twitter"
        ></a>
        <a
          href="https://github.com/rushikesh3299"
          target="_blank"
          class="fa fa-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/rushikesh-chougule-621854192/"
          target="_blank"
          class="fa fa-linkedin"
        ></a>
      </div>
      <div class="footer-info">
        <a href="#">Made with ❤ by Rushikesh</a>
        <a href="https://neog.camp/">Inspired By NeoGcamp</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style scoped>
.container {
  border-top: 2px solid var(--primary-color);
  margin: 1rem;
}

.footer {
  text-align: center;
}

.footer-icon a {
  color: var(--);
  font-size: 2rem;
  padding: 1rem;
}

.footer-info {
  display: flex;
  justify-content: space-around;
}
</style>
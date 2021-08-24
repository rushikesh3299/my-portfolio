<template>
  <div class="container">
      <div class="footer">
          <div class="footer-icon">
            <a href="https://twitter.com/rushikesh3299" target="_blank" class="fa fa-twitter"></a>
            <a href="https://github.com/rushikesh3299" target="_blank" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/rushikesh-chougule-621854192/" target="_blank" class="fa fa-linkedin"></a>
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
    name:'Foot',
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
.container{
  text-align: center;
  border-top: 2px solid #5B2C6F;
  margin-top: 1rem;
}

.footer{
  padding: 1rem;
  margin: auto;
}

.footer-icon .fa{
  text-decoration: none;
  padding: 1rem;
  padding-top: 0;
  font-size: 2rem;
  color: #555;
}

.footer-info a{
  padding: 1rem;
  text-decoration: none;
  color: #555;
}

.footer a:hover{
  color: black;
}

@media only screen and (max-width: 800px) {
  .footer-info a{
    display: block;
  }
}
</style>
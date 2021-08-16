<template>
  <div class="container">
      <h1>OS Installation On Raspberry Pi</h1>
      <h3>How to install OS on Raspberry Pi?</h3>
      <img src="../assets/rpi.jpg" alt="loading..." class="img1">
      <p>Raspberry Pi has become the embedded programmers & students first choice for testing the project Immediately after it’s introduction to market. The board comes with affordable price & all of the required features for educational project purposes. Booting OS for raspberry pi is also simple which requires only an extra SDHC card which is nothing but memory card which we use in our smartphones. The cards above 16GB are recommended for optimized performance of pi.</p>
      <p>To install OS on raspberry pi we first has to format it using special <a href="https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/" target="_blank">sd card formatter</a> tool. After formatting the sd card. We have to download & burn image file on memory card with <a href="https://www.raspberrypi.org/software/" target="_blank">Raspberry Pi imager app</a>.</p>
      <img src="../assets/rpi_imager.jpg" alt="loading..." class="img2">
      <p>As shown above the RPi imager allows us to select between multiple os available there. Some of the popular os’s are Raspbian & Noobs. After we choose the os & select the targeted memory card the os image will be download os & boot sd card with selected os.</p>
      <p>Now you can boot your Raspberry pi. You have to connect it to the monitor with HDMI cable. Otherwise for headless botting of Raspberry pi we have to create a SSH file without extension in root folder of sd card. Then we have to add wpa_supplicant.conf file as shown below.</p>
      <img src="../assets/wpa.jpg" alt="loading" class="img3">
      <p>After all this our Raspberry pi will boot up & we are good to go into the Raspbian World.</p>
  </div>
</template>

<script>
export default {
    name:'Bloga',

}
</script>

<style scoped>
  .container{
    padding: 1.5rem;
  }

  .img1{
    margin-left: 15%;
  }

  .img2{
    margin-left: 7%;
  }

</style>
<template>
  <div class="container">
      <h1>LED Interfacing with 8051</h1>
      <h3>Interfacing LED using Embedded C with 8051</h3>
      <p>With the advancement in technology chips are getting fabricated in lesser space. In this advancement many processors have came & gone. But the Intel’s 8-bit microcontroller had remained everyone favorite for learning purpose as it is beginner friendly. This blog will explain you most basic interfacing of Led with 8051 using embedded c Programming. Light Emitting Diodes (LEDs) are the most commonly used component in many applications.</p>
      <p>For this task we will use Atmel’s AT89C51 processor which is solely based on intel’s 8051 seris. We will use Proteus 8 Professional for testing & simulating the code.</p>
      <h4>Components required:</h4>
      <ul>
        <li>AT89C51</li>
        <li>LED's</li>
      </ul>
      <h4>Interfacing:</h4>
      <img src="../assets/Capture.jpg" alt="img loading">
      <p>Above figure shows the led’s are forward biased & there anode is connected to controller pins while their cathodes are common grounded. The crystal oscillator & vcc, gnd connections for controller is not shown because while implementing in Proteus it will automatically be care taken.</p>
      <h4>Code:</h4>
      <img src="../assets/code_snip.jpg" alt="img loading">
      <h4>Inside the code</h4>
      <p>The program shown above is of very basic & beginner friendly level. The code is built & compiled using Keil uvision compiler. In the program the library for 8051 based microcontrollers is included using <span>#include<reg51.h/></span>. Then the port for led interfacing is defined with <span> #define led P1</span>. The <span> void delay (int d)</span> will generated delay according to value passed to d. In the main loop we have made led on <span>led=0xff;</span> & off <span>led=0x00;</span> infinitely.</p>
  </div>
</template>

<script>
export default {
    name:'Blogb',

}
</script>

<style scoped>
  .container{
    padding: 1.5rem;
  }

  img{
    width: 95%;
  }

  span{
    background-color: #ccc;
  }
</style>
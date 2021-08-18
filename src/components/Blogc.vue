<template>
  <div class="container">
    <h1>Portable Programmable Medicine Reminder</h1>
    <h3>Abstract</h3>
    <p>The project will take care of people who requires to reminder & forgot to take their medicine on time. Elder people or people with Alzheimer’s disease always forgot to take medicines on time due to their age & medical conditions. The project will help to remind the patient to take his/her medicines at prescribed time by doctors.</p>
    <p>The patient can store the respective time of the particular medicine through a matrix keypad. Based on the time entered by user the program will run on microcontroller with reference of real time from RTC (Real time clock) & when current timing matches with time entered by user the buzzer will sound & name of the medicine to be taken will be displayed.</p>
    <h3>Block Diagram</h3>
    <img src="../assets/block_dia.jpg" alt="">
    <h3>Key Components used</h3>
    <ul>
        <li>PIC16F877a (microcontroller)</li>
        <li>DS1307 (RTC)</li>
        <li>Alphanumeric Keypad</li>
        <li>16*2 lcd</li>
        <li>buzzer</li>
    </ul>
    <h3>Working</h3>
    <ul>
        <li>The project uses RTC (Real time clock) DS1307 which is connected to our microcontroller for the real time reference. </li>
        <li>A matrix keypad is also interfaced with microcontroller for user timing input purpose. </li>
        <li>Right now, our controller has the names of medicine stored on it for which we can enter timing if they are prescribed to us. </li>
        <li>When the real time reaches to the time entered by a user an alarm will be rang & the name of the medicine which should be taken is displayed.</li>
    </ul>
    <h3>Advantages</h3>
    <ul>
        <li>Cheaper system</li>
        <li>can also be implemented in hospitals to reduce human efforts</li>
    </ul>
    <h3>Disadvantages</h3>
    <ul>
        <li>Right now project doesn’t provide provision to store name of medicines we have to choose them from list present their</li>
        <li>Are not feasible for outdoor patient</li>
    </ul>
    <h3>Applications</h3>
    <ul>
        <li>For elder people</li>
        <li>In hospitals</li>
        <li>People with complex medicine schedules</li>
        <li>For Alzheimer’s patient</li>
    </ul>
    <h3>Future development</h3>
    <p>With the advancement in technology by integrating it with GSM & other IOT technologies outdoor patients can also receive message or call alert on their mobile.</p>
    <p>Also with the help of external memory interfacing user can also store name of medicines by themselves.</p>
    <p>At the end, we can conclude that right now the project has very limited applications but with future enhancement it can be implemented for anyone.</p>
  </div>
</template>

<script>
export default {
    name:'Blogc',

}
</script>

<style scoped>
    .container{
        padding: 1.5rem;
    }

    img{
        width: 70%;
        margin-left: 15%;
    }
</style>
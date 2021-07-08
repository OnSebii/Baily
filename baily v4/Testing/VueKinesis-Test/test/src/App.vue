<template>
  <div id="app">
    <kinesis-container class="container">
      <kinesis-element>
        <!-- LogRocket logo -->
      </kinesis-element>

      <!-- background-circles-props -->
      <kinesis-element>
        <div class="circle circle-purple"></div>
      </kinesis-element>
      <kinesis-element>
        <div class="circle circle-purple1"></div>
      </kinesis-element>
      <kinesis-element>
        <div class="circle circle-purple2"></div>
      </kinesis-element>
      <kinesis-element>
        <div class="circle circle-purple3"></div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  text-align: center;
}

.container {
  padding: 15rem 0;
  background-color: #7749bd;
}

.circle {
  position: absolute;
  border-radius: 100%;
}

.circle.circle-purple {
  border: 10px solid #f2eafa;
  opacity: 0.1;
  width: 4vw;
  height: 4vw;
  left: 10%;
  top: 25%;
}

.circle.circle-purple1 {
  border: 15px solid #f2eafa;
  opacity: 0.1;
  width: 8vw;
  height: 8vw;
  right: -2%;
  bottom: 17%;
}
.circle.circle-purple2 {
  background-color: #f2eafa;
  opacity: 0.1;
  width: 5vw;
  height: 5vw;
  left: 20%;
  bottom: 17%;
}

.circle.circle-purple3 {
  border: 15px solid #f2eafa;
  opacity: 0.3;
  width: 3vw;
  height: 3vw;
  top: 80%;
  left: 60%;
}
</style>

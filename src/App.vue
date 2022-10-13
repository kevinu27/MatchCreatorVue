<template>
  <div>
    <NavBar></NavBar>
    <MainView></MainView>



</div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import MainView from './components/MainView.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    MainView
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  /* background: #efefef; */
  margin: 0;
}

.container {
  margin: 100px auto;
}

.trophy {
  margin: 50px auto;
  width: 50px;
}

.cup {
  height: 50px;
  width: 50px;
  background: rgba(255, 215, 0);
  border-radius: 0 0 25px 25px;
  -moz-border-radius: 0 0 25px 25px;
  -webkit-border-radius: 0 0 25px 25px;
  display: flex;
  justify-content: center;

}
.cup p {
  font-weight: bold;
  /* font-size: 20px; */
  border: 2px solid lightgray;
  width: min-content;
  padding: 0.2rem;
  margin-top: auto;
  border-radius: 50px;
}

.stand {
  margin: 0 auto;
  height: 25px;
  width: 10px;
  background: rgba(255, 215, 0);
}

.lefthand {
  margin-top: -48px;
  margin-left: -15px;
  height: 25px;
  width: 25px;
  border: 5px solid rgba(255, 215, 0);;
  background: rgba(255, 215, 0);
  border-radius: 0 0 0 55px;
}

.righthand {
  margin-top: -35px;
  margin-left: 30px;
  height: 25px;
  width: 25px;
  border: 5px solid rgba(255, 215, 0);
  background:  rgba(255, 215, 0);
  border-radius: 0 0 55px 0;
}

.base {
  margin-top: 1px;
  height: 10px;
  margin-left: 5px;
  width: 40px;
  background: rgba(255, 215, 0);
}

</style>

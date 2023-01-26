<template>
  <div>
    <header class="header__navbar">
      <div class="navbar">
        <h1 class="navbar__logo">
          <router-link to="/">Match Creator</router-link>
        </h1>
        <ul class="navbar__links">
          <!-- <li><a href="#">Home</a></li> -->
          <!-- <li><router-link to="/profile"> Profile</router-link></li> -->
          <li class="router-link-styles" v-if="isLoggedIn" > Welcome,{{ this.$store.state.userName }} <!-- aqui poner nombre cuando lo pida de la base de datos--> </li>

          <div class="dropdown">
            <li class="router-link-styles" > User  </li>
            <div class="dropdown-content">
              <router-link to="/profile" v-if="isLoggedIn">Profile</router-link>
              <a href="#" @click="openModalLogin" v-if="!isLoggedIn">login</a>
              <!-- refactor el boton con mutation etc -->
              <a href="#" @click="openModalSignup" v-if="!isLoggedIn">register</a>
              <a href="#" v-if="isLoggedIn" @click="logout">logout</a>
            </div>
          </div>
          <!-- <li><a href="https://codepen.io/cryptoctopus/collections/popular/">Pen Collection</a></li> -->
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import { translation } from "./../../configuration.js"
export default {
  name: "NavBar",
  data() {
    return { 
      userName: ""
  };
  },
  computed:{
    isLoggedIn(){
      return this.$store.getters.isAuthenticated
    },
    // getUserName(){
    //   this.userName = this.$store.getters.userName
    //   return ""
    // }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
    },
    openModalLogin() {
      console.log("translation", translation)
      console.log("boton del login", this.$store.state.showModalLogin);
      this.$store.state.showModalLogin = true;
      document.documentElement.style.overflow = 'hidden'

    },
    openModalSignup() {
      console.log("boton del signup", this.$store.state.showModalSignup);
      this.$store.state.showModalSignup = true;
      document.documentElement.style.overflow = 'hidden'
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  font-family: sans-serif;
  line-height: 1.6;
  margin: 0;
  min-height: 100vh;
  font-size: 1.6rem;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
a,
p {
  color: #34495e;
}
a {
  text-decoration: none;
}
.header__navbar {
  padding: 0 0;
  border: 1px solid #a2a2a2;
  background-color: #efefef;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  /* position: sticky; */
  top: 0;
}
.navbar__logo a,
.navbar__links a {
  text-transform: uppercase;
  text-align: center;
  display: block;
}
.navbar__logo {
  margin: 0;
  padding: 1rem 0;
}
.navbar__links a:not(last-child) {
  padding: 2rem;
}

.navbar a:hover {
  color: orangered;
}

.navbar {
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 3rem;
}

main {
  max-width: 136.6rem;
  padding: 3rem;
  margin: 0 auto;
  min-height: 100vh;
}
/* ================================= 
  Media Queries
==================================== */
@media (min-width: 769px) {
  .navbar,
  .navbar__links {
    display: flex;
  }
  .navbar {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    max-width: 1366px;
  }
}

@media (min-width: 1025px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
  }
}

a.router-link-active {
  font-weight: 1000;
}

/* ---------------------- */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.router-link-styles{
  padding: 2rem;
  text-transform: uppercase;
  text-align: center;
  display: block;
  text-decoration: none;
}
.router-link-styles:hover{
  cursor: pointer;
}
</style>

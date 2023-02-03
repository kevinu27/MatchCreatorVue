<template>
    <div class="ranking">
      <h1  @click="maximize">  
        Top players
      </h1>
<div v-if="isRankingVisible">
      <li v-for="(user, index) in users" v-bind:key="index" class="ranking-players" >
        <p>{{ user.name }}</p>
    </li>
  </div>
    </div>

      
  </template>
  
  <script>
  import { translation } from "./../../configuration.js";
  import UsersService from "@/services/UsersService";
  
  export default {
    name: "RankingPlayers",
    props: {
      msg: String,
    },
    data() {
      return {
        users:null,
        isRankingVisible: false
      };
    },
    methods: {
      translation() {
        this.translationLabel.welcome = translation.welcomeLabel.english;
      },
      maximize(){
        this.isRankingVisible = !this.isRankingVisible
      }
    },
    async mounted() {
      const rawData = await UsersService.getAllUsers()
      this.users = rawData.data
      await console.log("  this.users",   this.users)
    },

  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .ranking{
    position: absolute;
    background-color: #efefef;
    border: 1px solid gray;
    /* z-index: 96; */
    width: 20%;
    /* min-height: 100%; */
  }
  .ranking-players{
list-style: none;
  }
  </style>
  
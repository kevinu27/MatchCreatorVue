<template>
    <div class="ranking">
      <h1>  
        Top players
      </h1>
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
        users:null
      };
    },
    methods: {
      translation() {
        this.translationLabel.welcome = translation.welcomeLabel.english;
      },
    },
    async mounted() {
      this.users = await UsersService.getAllUsers()
    },

  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .ranking{
    position: absolute;
    /* background-color: red; */
  background-color: #efefef;

    border: 1px solid gray;
    z-index: 96;
    width: 20%;
    min-height: 100%;
  }
  
  </style>
  
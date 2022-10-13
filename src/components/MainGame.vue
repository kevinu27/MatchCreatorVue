<template>
    <div>
  
           <h1>Welcome to Match Creator</h1>
         <div class="container">
  <div class="trophy">
    <div class="cup"> <p> 1 </p> </div>
    <div class="lefthand"></div>
    <div class="righthand"></div>
    <div class="stand"></div>
    <div class="base"></div>
  </div>
</div>

      
            <SportType></SportType> 
          <br>
          <hr>  
          <NumberOfPlayers></NumberOfPlayers>
          <PlayerInputs></PlayerInputs>
          <MatchesList></MatchesList>
          <RankingList></RankingList>
    </div> 
  
  </template>
  
  <script>
  import SportType from "./SportType.vue";
  import NumberOfPlayers from "./NumberOfPlayers.vue";
  import PlayerInputs from "./PlayerInputs.vue";
  import MatchesList from "./MatchesList.vue";
  import RankingList from "./RankingList.vue";
  // import UserProfile from './UserProfile.vue'; // no es necesario importarlo porque ya los estamos importando de de router
  
  export default {
      name: "MainGame",
      props: {
          msg: String
      },
      data() {
          return {
         
          };
      },
      methods: {        
  
      },
      components: { SportType, NumberOfPlayers, PlayerInputs, MatchesList, RankingList }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  

  
  </style>
  
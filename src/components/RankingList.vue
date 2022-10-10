<template>
  <div>
    <div class="rankingNames" v-for="(newPlayers, index) in $store.state.newPlayers" v-bind:key="index">
      <div class="playerNameAndPoints"><h2>{{newPlayers.name}} - {{newPlayers.points}}</h2></div>
    </div>
  </div>
</template>
    
<script>
    export default {
      name: 'RankingList',
      data() {
            return {
            
            };
        },

      }
</script>
    
<style scoped>
    .rankingNames{
      
      padding: 1rem;
     
      display: flex;
      justify-content: center;
      
    }

    .playerNameAndPoints{
      border: 1px solid lightgray;
       width: fit-content;
       padding-right: 5rem;
       padding-left: 5rem;
    }
    
</style>
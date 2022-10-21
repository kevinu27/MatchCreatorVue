<template>
  <div>
    <div class="rankingNames" v-for="(newPlayers, index) in getNewPlayers" v-bind:key="index">
      <div class="playerNameAndPoints"><h2>{{newPlayers.name}} - {{newPlayers.points}}</h2></div>
    </div>
  </div>
</template>
    
<script>
  import {mapGetters} from 'vuex'
    export default {
      name: 'RankingList',
      data() {
            return {
            
            };
        },
        computed: {
        ...mapGetters(['getNewPlayers'])
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
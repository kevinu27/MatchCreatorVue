<template>
  <div class="test">
    <div class="tabs">
      <div class="selected-tab first-tab" @click="byPoints()"> Score by points</div>
      <div class="unselected-tab second-tab" @click="byWonMatches()">Score by won matches</div>
    </div>
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
    methods:{   
      byPoints() {
        console.log("byPoints")
        this.$store.state.ScoringMethods = "byPoints"
      },
      byWonMatches() {
        console.log("byWonMatches")
        this.$store.state.ScoringMethods = "byWonMatches"
      }
    }

      }
</script>
    
<style scoped>
  .test{
    border:2px solid red;
  }
  .tabs{
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
  }
  .unselected-tab{
    /* border:2px solid blue; */
    padding: 2rem;
    width: 25%;
    background-color: #F6F6F6;
  }
  .selected-tab{
    /* border:2px solid blue; */
    padding: 2rem;
    width: 25%;
    background-color: #F0F0F0;
  }
  .first-tab{
    /* border:2px solid blue; */
    padding: 2rem;
    width: 25%;
    background-color: #F0F0F0;
    border-radius: 0px 0px 15px 20px;
  }
  .second-tab{
    /* border:2px solid blue; */
    padding: 2rem;
    width: 25%;
    background-color: #F0F0F0;
    border-radius: 0px 0px 15px 20px;
  }
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
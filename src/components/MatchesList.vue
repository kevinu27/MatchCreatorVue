<template>
  <div>
    <li v-for="(match, index) in getMatches" v-bind:key="index" class="PlayerNameList" >
      <div class="matchCard" v-if="getSelectedMatchVS === '2vs2'"> <p>{{match.teams[0].members[0].name}} - {{match.teams[0].members[1].name}} <span> VS</span>  {{match.teams[1].members[0].name}} - {{match.teams[1].members[1].name}}</p> <div class="inputScore"><input type="text" v-on:input="setMatchScore_2vs2($event, match.id)"> <input type="text" v-on:input="setMatchScore2_2vs2($event, match.id)"> </div></div>
      <div class="matchCard" v-if="getSelectedMatchVS === '1vs1'"> <p>{{match.teams[0].members[0].name}}<span> VS</span>   {{match.teams[1].members[0].name}} </p> <div class="inputScore"><input type="text" v-on:input="setMatchScore_1vs1($event, match.matchId)"><input type="text" v-on:input="setMatchScore2_1vs1($event,  match.matchId)"> </div></div>
    </li>
    <div v-if="getSelectedMatchVS === '1vs1'">
      <button @click="makeMatches1vs1" class="btn btn-primary" v-if="getCurrentPage > 0">display matches</button>
    </div>
    <div v-if="getSelectedMatchVS === '2vs2'">
      <button @click="makeMatches2vs2" class="btn btn-primary" v-if="getCurrentPage > 0">display matches</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'MatchesList',
    methods: {        
      makeMatches1vs1() {
        this.$store.dispatch("setMakeMatches1vs1");
      },
      makeMatches2vs2() {
        this.$store.dispatch("setMakeMatches2vs2");
      },
      setMatchScore_2vs2(event, id){
        this.$store.dispatch("setSetMatchScore_2vs2", { event: event, id: id });
      },
      setMatchScore2_2vs2(event, id){
        this.$store.dispatch("setSetMatchScore2_2vs2", { event: event, id: id });
      },
      setMatchScore_1vs1(event, id){
        this.$store.dispatch("setSetMatchScore_1vs1", { event: event, id: id });
      },
      setMatchScore2_1vs1(event, id){
        this.$store.dispatch("setSetMatchScore2_1vs1", { event: event, id: id });
      },
    },
    computed: {
        ...mapGetters(['getMatches','getSelectedMatchVS', 'getCurrentPage'])
    },

  }
</script>

<style scoped>
  li {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  button{
    margin-top: 1rem;
    border-style: none;
    height: 3rem;
    border-radius: 3px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .inputScore{
    display: flex;
    align-items: center;
    margin-right: 4rem;
  }

  .inputScore input{
    height: 25px;
    margin-left: 2rem;
  }

  .matchCard{
    display: flex;
    background-color: rgb(240,240,240);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding-right:2rem;
    padding-left:2rem;
    width: 70%;
    display: flex;
    justify-content: center;
  }

</style>
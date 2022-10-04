<template>
  <li v-for="(match, index) in $store.state.matches" v-bind:key="index" class="PlayerNameList" >
    <div class="matchCard" v-if="$store.state.selectedMatchVS === '2vs2'"> <p>{{match.teams[0].members[0].name}} - {{match.teams[0].members[1].name}} <span> VS</span>  {{match.teams[1].members[0].name}} - {{match.teams[1].members[1].name}}</p> <div class="inputScore"><input type="text" v-on:input="setMatchScore_2vs2($event, match.id)"> <input type="text" v-on:input="setMatchScore2_2vs2($event, match.id)"> </div></div>
    <div class="matchCard" v-if="$store.state.selectedMatchVS === '1vs1'"> <p>{{match.teams[0].members[0].name}}<span> VS</span>   {{match.teams[1].members[0].name}} </p> <div class="inputScore"><input type="text" v-on:input="setMatchScore_1vs1($event, match.matchId)"><input type="text" v-on:input="setMatchScore2_1vs1($event,  match.matchId)"> </div></div>
  </li>
  <div v-if="$store.state.selectedMatchVS === '1vs1'">
    <button @click="makeMatches1vs1" class="btn btn-primary" v-if="$store.state.currentPage > 0">display matches</button>
  </div>
  <div v-if="$store.state.selectedMatchVS === '2vs2'">
    <button @click="makeMatches2vs2" class="btn btn-primary" v-if="$store.state.currentPage > 0">display matches</button>
  </div>
</template>

<script>
export default {
  name: 'MatchesList',
  data() {
        return {
     
        };
    },
    methods: {        
        makeMatches1vs1() {
            this.$store.commit("makeMatches1vs1");
        },
        makeMatches2vs2() {
            this.$store.commit("makeMatches2vs2");
        },
        setMatchScore_2vs2(event, id){
          this.$store.commit("setMatchScore_2vs2", { event: event, id: id });
        },
        setMatchScore2_2vs2(event, id){
          this.$store.commit("setMatchScore2_2vs2", { event: event, id: id });

        },
        setMatchScore_1vs1(event, id){
          this.$store.commit("setMatchScore_1vs1", { event: event, id: id });
        },
        setMatchScore2_1vs1(event, id){
          this.$store.commit("setMatchScore2_1vs1", { event: event, id: id });

        },
    },

  }
</script>

<style scoped>

.inputScore{
  display: flex;
  /* border: 2px solid red; */
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
margin-bottom: 1rem;
margin-top: 1rem;
border: 3px solid green;
  }

</style>
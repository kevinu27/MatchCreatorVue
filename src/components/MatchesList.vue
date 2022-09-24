<template>
   <li v-for="(match, index) in $store.state.matches" v-bind:key="index" class="PlayerNameList">
      <div class="matchCard"> <p>{{match.teams[0].members[0].name}} - {{match.teams[0].members[1].name}} <span> VS</span>  {{match.teams[1].members[0].name}} - {{match.teams[1].members[1].name}}</p> <div class="inputScore"><input type="text" v-on:input="setMatchScore($event, match.id)"> <input type="text" v-on:input="setMatchScore2($event, match.id)"> </div></div>
      
        </li>
        <button @click="makeMatches" class="btn btn-primary">display matches</button>
</template>

<script>
export default {
  name: 'MatchesList',
  data() {
        return {
     
        };
    },
    methods: {        
        makeMatches() {
            this.$store.commit("makeMatches");
        },
        setMatchScore(event, id){
          this.$store.commit("setMatchScore", { event: event, id: id });
        },
        setMatchScore2(event, id){
          this.$store.commit("setMatchScore2", { event: event, id: id });

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
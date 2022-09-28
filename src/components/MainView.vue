<template>
  <div class="hello">
         <h1>{{ msg }}</h1>
         <!-- poner v-if y un estado que indique en que pagina estoy -->
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
export default {
    name: "MainView",
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
.rankingNames{
  display: flex;
  flex-direction: column;
}
.rankingNames h2{
border: 2px solid red;
margin: 0px;
margin-top: 1.5rem;
}


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
  .PlayerNameList{
display: flex;

/* border: 2px solid red; */
width: 100%;
justify-content: center;
align-items: center;
/* height: 100px; */
/* margin-bottom: 3rem; */
  }
  .PlayerNameList p{
/* border: 2px solid green; */
width: 70%;
margin-left: 4rem;
margin-right: 5rem;
/* background-color: rgb(240,240,240);
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
font-size: 2rem; */
  }
  .PlayerNameList span{
    font-size: 2.8rem;
    margin-left: 4rem;
    margin-right: 4rem;
  }

  .playerInputRow{
    display: flex;
    justify-content: center;
    border: 2px solid blue;
  }

.playerInputsList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

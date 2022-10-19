<template>
    <div class="pLayerInput">
        <div  class="playerInputsList" v-if="$store.state.currentPage>0">
            <li v-for="(player, index) in $store.state.newPlayers" v-bind:key="index" class="playerInputRow">
                <div class="inputs"> <input type="text" placeholder="Player name" v-on:input="setNames($event, index)"></div>
                <div class="inputs">   <input type="text" placeholder="Player skills" v-on:input="setSkills($event, index)"></div>
            </li>
        </div> 
        <div class="inputRange" v-if="$store.state.selectedMatchVS === '2vs2'">
            <input type="range" min="0" max="10" steps="1" value= "10" v-on:input="getSlider" v-if="$store.state.currentPage > 0">  
        </div>
    </div>
</template>
    
<script>
    export default {
      name: 'PlayerInputs',
      data() {
            return {
             
            };
        },
        methods: {        
        addPlayers() {
            this.$store.dispatch("pageForward");
        },
        setNames(event, id) {
            this.$store.commit("setNames", { event: event, id: id });
        },
        setSkills(event, id) {
            this.$store.commit("setSkills", { event: event, id: id });
        },
        getSlider(event){
            this.$store.commit("filterBySkills", event);
        },  
    },
      }
</script>
    
<style scoped>
   .inputs input{
        height: 3rem;
        border: 1px solid lightgray;
        font-size: 1rem;
        margin-bottom: 1rem;
        width: 100%;
    }
.inputs{
    display: flex;
    justify-content: center;
    /* border: 2px solid green; */
    width: 30%;
    }

.playerInputRow{
    display: flex;
    justify-content: space-between;
    /* border: 2px solid orange; */
    width: 100%;
  }

.playerInputRow li{
    display: flex;
    justify-content: center;
    border: 2px solid blue;
  }

.playerInputsList{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    width: 70%;
    padding: 2rem;
    border-radius: 10px;
}

.pLayerInput{
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    position: relative;
}

.inputRange{
    position: absolute;
    top: 50% ;
    /* border: 2px solid green; */
    width: 50%;
}
</style>
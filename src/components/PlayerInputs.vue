<template>
        <div class="pLayerInput">
       <div  class="playerInputsList">
      <button @click="addPlayers">Set players inputs
      </button>

       <li v-for="(player, index) in $store.state.newPlayers" v-bind:key="index" class="playerInputRow">
        <div class="inputLabel"> <p> Name {{index + 1}}</p><input type="text" placeholder="Player name" v-on:input="setNames($event, index)"></div>
      <div class="inputLabel">  <p> skills</p> <input type="text" placeholder="Player skills" v-on:input="setSkills($event, index)"></div>
           </li>
        
        </div> 
        <div class="inputRange">
        <input type="range" min="0" max="10" steps="1" v-on:input="getSlider" v-if="$store.state.currentPage > 0">  
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
            this.$store.commit("addPlayers");
            this.$store.commit("pageForward");
        },
        setNames(event, id) {
            this.$store.commit("setNames", { event: event, id: id });
        },
        setSkills(event, id) {
            this.$store.commit("setSkills", { event: event, id: id });
        },
        getSlider(event){
            console.log("Slider Value", event.target.value)
        },
        
    },
      

      }
</script>
    
<style scoped>
.inputLabel{
    display: flex;
    justify-content: center;
    /* border: 2px solid green; */
    }

.playerInputRow{
    display: flex;
    justify-content: space-between;
    /* border: 2px solid blue; */
    width: 100%;
  }

.playerInputRow li{
    display: flex;
    justify-content: center;
    /* border: 2px solid blue; */
  }

.playerInputRow p{
    margin-left: 2rem;
    margin-right: 2rem;
  }

.playerInputRow input{
    margin-left: 2rem;
    margin-right: 2rem;
  }

.playerInputsList{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 2px solid red; */
    width: 70%;
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
}
</style>
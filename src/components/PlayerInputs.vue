    <template>
       <div  class="playerInputsList">
      <button @click="addPlayers">Set players inputs
      </button>
       <li v-for="(player, index) in $store.state.newPlayers" v-bind:key="index" class="playerInputRow">
        <p>player, index: {{index -1}}</p>
          <input type="text" placeholder="Player name" v-on:input="setNames($event, index)">
           </li></div>
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
        },
        setNames(event, id) {
            this.$store.commit("setNames", { event: event, id: id });
        },
   
    },
      

      }
    </script>
    
    <style scoped>
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

    </style>
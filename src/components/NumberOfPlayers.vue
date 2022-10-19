<template>
    <div>
        <select v-model="selected">
            <option>1vs1</option>
            <option>2vs2</option>
        </select>
        <div class="buttonInput">
            <input type="number" class="numer" v-model="numberOfPlayers" >
            <button @click="addPlayers" v-if="$store.state.numberOfPlayers > 0">Set players inputs</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NumberOfPlayers',
  data() {
        return {
            numberOfPlayers: "",
            selected: ""
        };
    },
    watch: {
        numberOfPlayers() {
            this.$store.dispatch("setNumberOfPlayers", this.numberOfPlayers);
        },
        selected(){
            console.log("selected", this.selected)
            this.$store.dispatch("selected", this.selected)
        }
    },
    methods: {        
        addPlayers() {
            this.$store.dispatch("addPlayers");
            this.$store.dispatch('pageForward');
        },
    }
  }
</script>

<style scoped>
.buttonInput{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.buttonInput input{
    height: 1.8rem;
    margin-bottom: 1rem;
}
.buttonInput button{
    font-weight: bold;
    margin-bottom: 1rem;
   border-style: none;
   height: 3rem;
   border-radius: 3px;
   padding-left: 2rem;
   padding-right: 2rem;
   margin-bottom: 1rem;
}

select{
    height: 2rem;
    margin-bottom: 1rem;
}

</style>
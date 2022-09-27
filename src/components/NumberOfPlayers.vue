<template>
    <div class="buttonInput">
        <input type="number" class="numer" v-model="numberOfPlayers" >
        <button @click="addPlayers" v-if="$store.state.numberOfPlayers > 0">Set players inputs</button>
    </div>
</template>

<script>
export default {
  name: 'NumberOfPlayers',
  data() {
        return {
            numberOfPlayers: "",
        };
    },
    watch: {
        numberOfPlayers() {
            console.log("entrando en el watch", this.numberOfPlayers);
            this.$store.commit("setNumberOfPlayers", this.numberOfPlayers);
        },
    },
    methods: {        
        addPlayers() {
            this.$store.commit("addPlayers");
            this.$store.commit("pageForward");
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

</style>
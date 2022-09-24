<template>
    <h4>What are you goign to play?</h4>
<h4>{{$store.state.typeOfGame}}</h4>
<input type="text" v-model="typeOfGame" >
</template>

<script>
export default {
  name: 'SportType',
  data() {
        return {
            typeOfGame: "",
        };
    },
    watch: {
        typeOfGame() {
            this.$store.commit("setTypeOfGame", this.typeOfGame);
        },
    },
  }
</script>

<style scoped>

</style>
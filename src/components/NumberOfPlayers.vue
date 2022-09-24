<template>
<input type="number" class="numer" v-model="numberOfPlayers" >
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
    }
  }
</script>

<style scoped>


</style>
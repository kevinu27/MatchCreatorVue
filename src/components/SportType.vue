<template>
    <div>
        <h4>What are you going to play?</h4>
        <h4>{{typeOfGame}}</h4>
        <input type="text" v-model="typeOfGame" >
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'SportType',
  data() {
        return {
            typeOfGame: "",
        };
    },
    computed: {
        ...mapGetters(['getTypeOfGame'])
    },
    watch: {
        typeOfGame() {
            this.$store.dispatch("setTypeOfGame", this.typeOfGame);
        },
    },
  }
</script>

<style scoped>
    input{

        height: 1.8rem;
        border: 1px solid lightgray;
    }

</style>
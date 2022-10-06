rgb(226, 230, 234)<template>
    <h4>What are you going to play?</h4>
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
    input{

        height: 1.8rem;
        border: 1px solid lightgray;
    }

</style>
<template>
        <div class="rankingNames" v-for="(newPlayers, index) in $store.state.newPlayers" v-bind:key="index" ><h2>{{newPlayers.name}} ----- {{newPlayers.points}}</h2></div>
</template>
    
<script>
    export default {
      name: 'RankingList',
      data() {
            return {
            
            };
        },

      }
</script>
    
<style scoped>
    
    
</style>
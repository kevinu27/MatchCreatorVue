<template>
  <div>

  <router-view>
    
  </router-view>
  </div> 

</template>

<script>

// import UserProfile from './UserProfile.vue'; // no es necesario importarlo porque ya los estamos importando de de router

export default {
    name: "MainView",
    props: {
        msg: String
    },
    data() {
        return {
       
        };
    },
    methods: {        

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>

export default {
    getNumberOfPlayers(state){
        console.log("getters-----")
        return state.numberOfPlayers
      },
      getTypeOfGame(state){
        return state.typeOfGame
      },
      getNewPlayers(state){
        return state.newPlayers
      },
      getCurrentPage(state){
        return state.currentPage
      },
      getMatches(state){
        return state.matches
      },
      getSelectedMatchVS(state){
        return state.selectedMatchVS
      },
      getSkillsFilter(state){
        return state.skillsFilter
      }
}
export default {
    setPageForward({commit}){
        commit('pageForward')
      },
      selected(context, payload){
        context.commit('selected', payload)
      },
      setNumberOfPlayers(context, payload){
        context.commit('setNumberOfPlayers', payload)
      },
      setTypeOfGame(context, payload){
        console.log("action del setTypeOfgame")
        console.log("payload", payload)
        context.commit('setTypeOfGame', payload)
      },
      setAddPlayers({commit}){
        console.log("ACTIONS addplayer")
        commit('addPlayers')
      },
      setNames(context, payload){
        context.commit('setNames', payload)
      },
      setSkills(context, payload){
        context.commit('setSkills', payload)
      },
      setFilterBySkills(context, payload){
        context.commit('filterBySkills', payload)
      },
      setMakeMatches1vs1({commit}){
        commit('makeMatches1vs1')
      },
      setMakeMatches2vs2({commit}){
        commit('makeMatches2vs2')
      },
      setSetMatchScore_2vs2(context, payload){
        context.commit('setMatchScore_2vs2', payload)
      },
      setSetMatchScore2_2vs2(context, payload){
        context.commit('setMatchScore2_2vs2', payload)
      },
      setSetMatchScore_1vs1(context, payload){
        context.commit('setMatchScore_1vs1', payload)
      },
      setSetMatchScore2_1vs1(context, payload){
        context.commit('setMatchScore2_1vs1', payload)
      }


}
export default {
  setPageForward({ commit }) {
    commit('pageForward')
  },
  selected(context, payload) {
    context.commit('selected', payload)
  },
  setNumberOfPlayers(context, payload) {
    context.commit('setNumberOfPlayers', payload)
  },
  setTypeOfGame(context, payload) {
    console.log("action del setTypeOfgame")
    console.log("payload", payload)
    context.commit('setTypeOfGame', payload)
  },
  setAddPlayers({ commit }) {
    console.log("ACTIONS addplayer")
    commit('addPlayers')
  },
  setNames(context, payload) {
    context.commit('setNames', payload)
  },
  setSkills(context, payload) {
    context.commit('setSkills', payload)
  },
  setFilterBySkills(context, payload) {
    context.commit('filterBySkills', payload)
  },
  setMakeMatches1vs1({ commit }) {
    commit('makeMatches1vs1')
  },
  setMakeMatches2vs2({ commit }) {
    commit('makeMatches2vs2')
  },
  setSetMatchScore_2vs2(context, payload) {
    context.commit('setMatchScore_2vs2', payload)
  },
  setSetMatchScore2_2vs2(context, payload) {
    context.commit('setMatchScore2_2vs2', payload)
  },
  setSetMatchScore_1vs1(context, payload) {
    context.commit('setMatchScore_1vs1', payload)
  },
  setSetMatchScore2_1vs1(context, payload) {
    context.commit('setMatchScore2_1vs1', payload)
  },
  //AUTH
  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOOlaLy5WDpDuGz3PTPLCdGLpqX_iHHWs', {
      method: 'POST',
      body: JSON.stringify({
        // name: payload.name,
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json();
    if (!response.ok) {
      console.log("respondeDAta en momento de error", responseData)
      const error = new Error(responseData.message || 'failed to authenticate.')
      throw error;
    }
    const expiresIn = +responseData.expiresIn * 1000  // el "+" convierte la string a number, y "* 1000" está multiplicando por milisecond para pasar las unidades a miliseconds
    const expirationDate = new Date().getTime() + expiresIn
    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.userId)
    localStorage.setItem('tokenExpiration', expirationDate)

    console.log("responseData", responseData)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.userId,
      tokenExpiration: expirationDate
    })
  },
  async signup(context, payload) { // async con await es alternativa al .then()
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOOlaLy5WDpDuGz3PTPLCdGLpqX_iHHWs', {
      method: 'POST',
      body: JSON.stringify({
        // name: payload.name,
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json();
    if (!response.ok) {
      console.log("respondeDAta en momento de error", responseData)
      const error = new Error(responseData.message || 'failed to authenticate.')
      throw error;
    }
    console.log("responseData", responseData)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.userId,
      tokenExpiration: responseData.expiresIn
    })
  },
  saveMatches({ commit }) {
    console.log("saveMatches en el actions")
    commit('saveMatches')
  },

  // logout(state) {
  //   state.token = null
  //   state.userId = null
  //   state.tokenExpiration = null
  // },
  autoLogin(context){
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
 
    if (token && userId){
      context.commit('setUser', {
      token: token,
      userId: userId,

    })
  }

  },
  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    context.commit('setUser', {
      token: null,
      userId: null,
    })

  },

}

export default {
  pageForward(state) {
    state.currentPage += 1
    console.log("state.currentPage", state.currentPage)
  },
  pageBackward(state) {
    state.currentPage -= 1
    console.log("state.currentPage", state.currentPage)
  },
  selected(state, payload) {
    state.selectedMatchVS = payload
  },
  setNumberOfPlayers(state, payload) {
    state.numberOfPlayers = payload
  },

  setTypeOfGame(state, payload) {
    state.typeOfGame = payload

  },
  addPlayers(state) {
    const newPlayers = [];

    for (let i = 0; i < state.numberOfPlayers; i++) {
      const newPlayer = {
        name: "",
        playerIndex: i,
        skills: 0,
        points: 0,
      }
      state.newPlayers.push(newPlayer);
    }
    return newPlayers;
  },
  setNames(state, payload) {
    state.newPlayers[payload.id].name = payload.event.target.value
  },
  setSkills(state, payload) {
    state.newPlayers[payload.id].skills = payload.event.target.value
  },
  filterBySkills(state, payload) {
    state.skillsFilter = payload.target.value
    console.log("slidervalue", payload.target.value)
    const matchesFilteredBySkills = state.matches.filter(match => Math.abs(Math.abs(match.teams[0].members[0].skills + match.teams[0].members[1].skills) - Math.abs(match.teams[1].members[0].skills + match.teams[1].members[1].skills)) < state.skillsFilter)
    console.log("matchesFilteredBySkills", matchesFilteredBySkills)
    console.log("state.matches", state.matches)

    state.matches = matchesFilteredBySkills

  },

  makeMatches1vs1(state) {
    const matches = []
    for (let i = 0; i < state.newPlayers.length; i++) {
      for (let j = 0; j < state.newPlayers.length; j++) {
        if (i === j) {
          continue;
        }
        const match = [state.newPlayers[j], state.newPlayers[i]];
        matches.push(match);
      }
    }

    for (let i = 0; i < matches.length; i++) {
      const player1 = matches[i][0];
      const player2 = matches[i][1];
      for (let j = 0; j < matches.length; j++) {
        if (i === j) {
          continue;
        }
        if (player1 === matches[j][1] && player2 === matches[j][0]) {
          if (i < j) {
            matches.splice(j, 1);
          }
          break;
        }
      }
    }

    //// esto se puede refactorizar
    const newMatches = []
    const newMatches2 = []

    for (let i = 0; i < matches.length; i++) {
      newMatches[i] = [{ members: matches[i][0] }, { members: matches[i][1] }]
    }
    for (let i = 0; i < newMatches.length; i++) {
      newMatches2[i] = { teams: [{ members: [matches[i][0]], points: 0 }, { members: [matches[i][1]], points: 0 }], matchId: `${newMatches[i][0].members.playerIndex}${i}` }, { teams: [{ members: [matches[i][0]], points: 0 }, { members: [matches[i][1]], points: 0 }], matchId: `${newMatches[i][1].members.playerIndex}${i}` }
    }

    state.matches = newMatches2
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    state.matches = shuffle(state.matches)

    state.matchesDisplayed = true
  },

  makeMatches2vs2(state) {
    const teams = []
    for (let i = 0; i < state.newPlayers.length; i++) {
      for (let j = 0; j < state.newPlayers.length; j++) {
        if (i === j) {
          continue;
        }
        const team = [state.newPlayers[j], state.newPlayers[i]];
        teams.push(team);
      }
    }
    for (let i = 0; i < teams.length; i++) {
      const player1 = teams[i][0];
      const player2 = teams[i][1];
      ///mirar si es necesario o lo puedo quitar/////////////////////////////////////////////////////////////////////
      for (let j = 0; j < teams.length; j++) {
        if (i === j) {
          continue;
        }
        if (player1 === teams[j][1] && player2 === teams[j][0]) {
          if (i < j) {
            teams.splice(j, 1);
          }
          break;
        }
      }
    }
    /////////////////
    const matches = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = 0; j < teams.length; j++) {
        if (i === j) {
          continue;
        }
        const matchTeams = [
          { members: teams[j], points: 0 },
          { members: teams[i], points: 0 },
        ];
        matches.push({
          teams: matchTeams,
          id: `${i}${j}`,
        });
      }
    }
    for (let i = 0; i < matches.length; i++) {
      const element1 = matches[i].teams[0].members[0];
      const element2 = matches[i].teams[0].members[1];

      if (
        element1 === matches[i].teams[1].members[1] ||
        element1 === matches[i].teams[1].members[0] ||
        element2 === matches[i].teams[1].members[0] ||
        element2 === matches[i].teams[1].members[1]
      ) {
        matches.splice(i, 1);
        i = i - 1;
      }
    }
    for (let i = 0; i < matches.length; i++) {
      const player1 = matches[i].teams[0].members[0].name;
      const player2 = matches[i].teams[0].members[1].name;
      for (let j = 0; j < matches.length; j++) {
        if (i === j) {
          continue;
        }
        if (
          player1 === matches[j].teams[1].members[0].name &&
          player2 === matches[j].teams[1].members[1].name
        ) {
          matches.splice(j, 1);
          j = j - 1;
          break;
        }
      }
    }

    state.matches = matches
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }
    state.matches = shuffle(state.matches)
    state.matchesDisplayed = true
  },
  setMatchScore_2vs2(state, payload) {
    console.log("  setMatchScore_2vs2(state, payload){")
    let points = parseInt(payload.event.target.value)
    for (let i = 0; i < payload.event.target.value.length; i++) {
      if (isNaN(payload.event.target.value[i])) {
        console.log("not a number")
        points = 0
      }
    }
    const stateMatchesCopy = [...state.matches]
    const matchScoringPoints = stateMatchesCopy.find((match) => match.id === payload.id)
    matchScoringPoints.teams[0].points = points
    if(matchScoringPoints.teams[0].points > matchScoringPoints.teams[1].points) {
      matchScoringPoints.teams[0].victory = 1 
      matchScoringPoints.teams[1].victory = 0
    }
    if(matchScoringPoints.teams[0].points < matchScoringPoints.teams[1].points) {
      matchScoringPoints.teams[1].victory = 1 
      matchScoringPoints.teams[0].victory = 0
    }
    
    const matchesFlateados = state.matches.map((match) => match.teams).flat()
    // console.log('----matchesFlateados------!!!!', matchesFlateados)
    // console.log('----state.matches------!!!!',  state.matches)
    for (let i = 0; i < state.newPlayers.length; i++) {
      let pointsArrayToPushToThePlayer = [0, 0]
      let victoriesArrayToPushToThePlayer = [0, 0]
      const playerToPushThePointsId = state.newPlayers[i].playerIndex
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      for (let j = 0; j < matchesFlateados.length; j++) {
        if (playerToPushThePointsId === matchesFlateados[j].members[0].playerIndex) {
          pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)
          victoriesArrayToPushToThePlayer.push(matchesFlateados[j].victory)
        }
        if (playerToPushThePointsId === matchesFlateados[j].members[1].playerIndex) {
          pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)
          victoriesArrayToPushToThePlayer.push(matchesFlateados[j].victory)
          
        }
      }
      state.newPlayers[i].points = pointsArrayToPushToThePlayer.reduce(reducer);
      state.newPlayers[i].victory = victoriesArrayToPushToThePlayer.reduce(reducer);
    }
    const sortedPlayers = [...state.newPlayers].sort((a, b) => {
      return b.points - a.points;
    });
    state.newPlayers = sortedPlayers
   console.log('state.newPlayers---!-!_!-!_!-!-11-!-1-!1_', state.newPlayers)
  },


  setMatchScore2_2vs2(state, payload) {
    console.log(" setMatchScore2_2vs2(state, payload){")
    let points = parseInt(payload.event.target.value)
    for (let i = 0; i < payload.event.target.value.length; i++) {
      if (isNaN(payload.event.target.value[i])) {
        console.log("not a number")
        points = 0
      }
    }
    const matchScoringPoints = state.matches.find((match) => match.id === payload.id)
    matchScoringPoints.teams[1].points = points
    if(matchScoringPoints.teams[0].points > matchScoringPoints.teams[1].points) {
      matchScoringPoints.teams[0].victory = 1 
      matchScoringPoints.teams[1].victory = 0
    }
    if(matchScoringPoints.teams[0].points < matchScoringPoints.teams[1].points) {
      matchScoringPoints.teams[1].victory = 1 
      matchScoringPoints.teams[0].victory = 0
    }

    const matchesFlateados = state.matches.map((match) => match.teams).flat()
    for (let i = 0; i < state.newPlayers.length; i++) {
      let pointsArrayToPushToThePlayer = [0, 0]
      let victoriesArrayToPushToThePlayer = [0, 0]
      const playerToPushThePointsId = state.newPlayers[i].playerIndex
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      for (let j = 0; j < matchesFlateados.length; j++) {
        if (playerToPushThePointsId === matchesFlateados[j].members[0].playerIndex) {
          pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)
          victoriesArrayToPushToThePlayer.push(matchesFlateados[j].victory)

        }
        if (playerToPushThePointsId === matchesFlateados[j].members[1].playerIndex) {
          pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)
          victoriesArrayToPushToThePlayer.push(matchesFlateados[j].victory)

        }
      }
      state.newPlayers[i].points = pointsArrayToPushToThePlayer.reduce(reducer);
      state.newPlayers[i].victory = victoriesArrayToPushToThePlayer.reduce(reducer);

    }
    const sortedPlayers = [...state.newPlayers].sort((a, b) => {
      return b.points - a.points;
    });
    state.newPlayers = sortedPlayers
   console.log('state.newPlayers---2-2_2-2_2-2-22-2-2-2_', state.newPlayers)

  },

  setMatchScore_1vs1(state, payload) {
    let points = parseInt(payload.event.target.value)
    for (let i = 0; i < payload.event.target.value.length; i++) {
      if (isNaN(payload.event.target.value[i])) {
        console.log("not a number")
        points = 0
      }
    }
    const stateMatchesCopy = [...state.matches]
    const matchScoringPoints = stateMatchesCopy.find((match) => parseInt(match.matchId) === parseInt(payload.id))
    matchScoringPoints.teams[0].points = points
    console.log('matchScoringPoints antes de los ifs', matchScoringPoints)
    if(matchScoringPoints.teams[0].points > matchScoringPoints.teams[1].points) {
      matchScoringPoints.teams[0].victory = 1 
      matchScoringPoints.teams[1].victory = 0
      console.log('----entroen en el priemr if')
    }
    if(matchScoringPoints.teams[0].points < matchScoringPoints.teams[1].points) {
      matchScoringPoints.teams[1].victory = 1 
      matchScoringPoints.teams[0].victory = 0
      console.log('----entroen en el segundo if')

    }
    console.log('matchScoringPoints despues de los ifs', matchScoringPoints)

    for (let i = 0; i < state.newPlayers.length; i++) {
      let pointsArrayToPushToThePlayer = [0, 0]
      let victoriesArrayToPushToThePlayer = [0, 0]
      const playerToPushThePointsId = state.newPlayers[i].playerIndex
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      for (let j = 0; j < state.matches.length; j++) {
        if (playerToPushThePointsId === state.matches[j].teams[0].members[0].playerIndex) {
          const pointToPush = state.matches[j].teams[0].points
          pointsArrayToPushToThePlayer.push(pointToPush)
          victoriesArrayToPushToThePlayer.push(state.matches[j].victory)

        }
        if (playerToPushThePointsId === state.matches[j].teams[1].members[0].playerIndex) {
          const pointToPush = state.matches[j].teams[1].points
          pointsArrayToPushToThePlayer.push(pointToPush)
          victoriesArrayToPushToThePlayer.push(state.matches[j].victory)
        }
      }
      state.newPlayers[i].points = pointsArrayToPushToThePlayer.reduce(reducer);
      state.newPlayers[i].points = victoriesArrayToPushToThePlayer.reduce(reducer);
    }
    const sortedPlayers = [...state.newPlayers].sort((a, b) => {
      return b.points - a.points;
    });
    state.newPlayers = sortedPlayers
    console.log('matches-----', state.matches)
   console.log('state.newPlayers---2-2_2-2_2-2-22-2-2-2_', state.newPlayers)

  },

  setMatchScore2_1vs1(state, payload) {
    let points = parseInt(payload.event.target.value)
    for (let i = 0; i < payload.event.target.value.length; i++) {
      if (isNaN(payload.event.target.value[i])) {
        console.log("not a number")
        points = 0
      }
    }
    const stateMatchesCopy = [...state.matches]
    const matchScoringPoints = stateMatchesCopy.find((match) => parseInt(match.matchId) === parseInt(payload.id))
    matchScoringPoints.teams[1].points = points

    for (let i = 0; i < state.newPlayers.length; i++) {
      let pointsArrayToPushToThePlayer = [0, 0]
      const playerToPushThePointsId = state.newPlayers[i].playerIndex
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      for (let j = 0; j < state.matches.length; j++) {
        if (playerToPushThePointsId === state.matches[j].teams[1].members[0].playerIndex) {
          const pointToPush = state.matches[j].teams[1].points
          pointsArrayToPushToThePlayer.push(pointToPush)
        }
        if (playerToPushThePointsId === state.matches[j].teams[0].members[0].playerIndex) {
          const pointToPush = state.matches[j].teams[0].points
          pointsArrayToPushToThePlayer.push(pointToPush)
        }
      }
      state.newPlayers[i].points = pointsArrayToPushToThePlayer.reduce(reducer);
    }
    const sortedPlayers = [...state.newPlayers].sort((a, b) => {
      return b.points - a.points;
    });
    state.newPlayers = sortedPlayers
  },

  saveMatches(state) {
    const playerNamesList = []
    state.newPlayers.map(element => playerNamesList.push(element.name))
    fetch(`https://brazo2.firebaseio.com/matches/${state.userId}.json?auth=` + state.token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ match: state.matches, players: playerNamesList }),
    });
  },
  ///AUTH
  setUser(state, payload) {
    console.log("en el mutation el payload es:", payload)
    state.token = payload.token
    state.userId = payload.userId
    state.tokenExpiration = payload.tokenExpiration
    state.userName = payload.userName
  }


}

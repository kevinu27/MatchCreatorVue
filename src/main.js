import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'

const store = createStore ({
  
    state(){
        return {
            numberOfPlayers: 0,
            newPlayers: [],
            typeOfGame: "",
            matches: [],
            currentPage: 0,
            selectedMatchVS: "",
            skillsFilter: 0
        }
        

    },
  

    mutations:{

      pageForward(state){
        state.currentPage += 1
        console.log("state.currentPage", state.currentPage)
      },
      pageBackward(state){
        state.currentPage -= 1
        console.log("state.currentPage", state.currentPage)
      },
      selected(state, payload){
        state.selectedMatchVS = payload
      },
        setNumberOfPlayers(state, payload){
      
            state.numberOfPlayers = payload
        },

        setTypeOfGame(state, payload){
            state.typeOfGame= payload

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


        setNames(state, payload){
            state.newPlayers[payload.id].name = payload.event.target.value
          },
          setSkills(state, payload){
            state.newPlayers[payload.id].skills = payload.event.target.value
          },
          filterBySkills(state, payload){
            console.log("Slider Value", payload.target.value)
            state.skillsFilter =  payload.target.value
            console.log(state)
          },

          makeMatches1vs1(state){
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
           
              for(let i = 0; i < matches.length; i++){
                 newMatches[i] = [{ members : matches[i][0] }, { members : matches[i][1] } ]
              }
              for(let i = 0; i < newMatches.length; i++){
                newMatches2[i] = {teams:  [{ members :[ matches[i][0]], points: 0 }, { members :[ matches[i][1]], points: 0 } ], matchId:`${newMatches[i][0].members.playerIndex}${i}` }, {teams:  [{ members : [matches[i][0]], points: 0 }, { members : [matches[i][1]], points: 0 } ], matchId: `${newMatches[i][1].members.playerIndex}${i}` }
             }
     
           state.matches = newMatches2
    },
    
    makeMatches2vs2(state){
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
          ){
            matches.splice(j, 1);
            j = j - 1;
             break;
          }
      }
    }

      state.matches= matches


  },
    setMatchScore_2vs2(state, payload){
      const points = parseInt(payload.event.target.value)
      const stateMatchesCopy = [...state.matches]
      const matchScoringPoints = stateMatchesCopy.find((match)=> match.id === payload.id)
      matchScoringPoints.teams[0].points = points

        const matchesFlateados = state.matches.map((match)=>  match.teams).flat()
        for(let i=0; i < state.newPlayers.length; i++){
            let pointsArrayToPushToThePlayer = [0,0]
            const playerToPushThePointsId =state.newPlayers[i].playerIndex
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            for(let j=0; j < matchesFlateados.length; j++){
                if(playerToPushThePointsId === matchesFlateados[j].members[0].playerIndex ){
                    pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)

                }
                if(playerToPushThePointsId === matchesFlateados[j].members[1].playerIndex ){
                    pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)

                }
            }
                state.newPlayers[i].points= pointsArrayToPushToThePlayer.reduce(reducer);
        }
        const sortedPlayers = [...state.newPlayers].sort((a, b) => {
          return b.points - a.points;
        });
       state.newPlayers = sortedPlayers
    },

    setMatchScore2_2vs2(state, payload){
        const points = parseInt(payload.event.target.value)
        const matchScoringPoints = state.matches.find((match)=> match.id === payload.id)
        matchScoringPoints.teams[1].points = points
        const matchesFlateados = state.matches.map((match)=>  match.teams).flat()
    
        for(let i=0; i < state.newPlayers.length; i++){
            let pointsArrayToPushToThePlayer = [0,0]
            const playerToPushThePointsId =state.newPlayers[i].playerIndex
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            for(let j=0; j < matchesFlateados.length; j++){
                if(playerToPushThePointsId === matchesFlateados[j].members[0].playerIndex ){
                        pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)
                }
                if(playerToPushThePointsId === matchesFlateados[j].members[1].playerIndex ){
                    pointsArrayToPushToThePlayer.push(matchesFlateados[j].points)
            }
            }
            state.newPlayers[i].points= pointsArrayToPushToThePlayer.reduce(reducer);
        }   
        const sortedPlayers = [...state.newPlayers].sort((a, b) => {
          return b.points - a.points;
        });
       state.newPlayers = sortedPlayers  
    },
    setMatchScore_1vs1(state, payload){
         const points = parseInt(payload.event.target.value)
         const stateMatchesCopy = [...state.matches]
         const matchScoringPoints = stateMatchesCopy.find((match)=> parseInt(match.matchId) === parseInt(payload.id))
         matchScoringPoints.teams[0].points = points

           for(let i=0; i < state.newPlayers.length; i++){
               let pointsArrayToPushToThePlayer = [0,0]
               const playerToPushThePointsId =state.newPlayers[i].playerIndex
               const reducer = (previousValue, currentValue) => previousValue + currentValue;
               for(let j=0; j < state.matches.length; j++){
                   if(playerToPushThePointsId === state.matches[j].teams[0].members[0].playerIndex ){
                     const pointToPush = state.matches[j].teams[0].points
                       pointsArrayToPushToThePlayer.push(pointToPush)
                   }
                   if(playerToPushThePointsId === state.matches[j].teams[1].members[0].playerIndex ){
                    const pointToPush = state.matches[j].teams[1].points
                      pointsArrayToPushToThePlayer.push(pointToPush)
                  }
               }
                   state.newPlayers[i].points= pointsArrayToPushToThePlayer.reduce(reducer);
           }
            const sortedPlayers = [...state.newPlayers].sort((a, b) => {
                return b.points - a.points;
              });
             state.newPlayers = sortedPlayers


        
            
    },
    setMatchScore2_1vs1(state, payload){
      const points = parseInt(payload.event.target.value)
      const stateMatchesCopy = [...state.matches]
      const matchScoringPoints = stateMatchesCopy.find((match)=> parseInt(match.matchId) === parseInt(payload.id))
      matchScoringPoints.teams[1].points = points

        for(let i=0; i < state.newPlayers.length; i++){
            let pointsArrayToPushToThePlayer = [0,0]
            const playerToPushThePointsId =state.newPlayers[i].playerIndex
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            for(let j=0; j < state.matches.length; j++){
                if(playerToPushThePointsId === state.matches[j].teams[1].members[0].playerIndex ){
                  const pointToPush = state.matches[j].teams[1].points
                    pointsArrayToPushToThePlayer.push(pointToPush)
                }
                if(playerToPushThePointsId === state.matches[j].teams[0].members[0].playerIndex ){
                  const pointToPush = state.matches[j].teams[0].points
                    pointsArrayToPushToThePlayer.push(pointToPush)
    
                }
            }
            state.newPlayers[i].points= pointsArrayToPushToThePlayer.reduce(reducer);
        }
           
        const sortedPlayers = [...state.newPlayers].sort((a, b) => {
          return b.points - a.points;
        });
       state.newPlayers = sortedPlayers

    },

}

})
console.log(store)

const app = createApp(App)
app.use(store)
app.mount('#app')

// createApp(App).use(store)
// createApp(App).mount('#app')

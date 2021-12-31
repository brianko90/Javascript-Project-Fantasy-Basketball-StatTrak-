import { Util } from './util.js'
let util = new Util();
export class Fetch {

  fetchPlayer() {
    return fetch("https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=lonzo_ball", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
        "x-rapidapi-key": "3810760e2cmsh322f7f5a3bf874ap1be58fjsn2ee382b1e5c1"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        util.listPlayer(data)
      })
  }
  
  // fetchTeam() {
  //   // let player = null;

  //   return fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/team?name=Lakers`, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
  //       "x-rapidapi-key": "3810760e2cmsh322f7f5a3bf874ap1be58fjsn2ee382b1e5c1"
  //     }
  //   })
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       let players = data;
  //       players.forEach((player) => {
  //         // console.log(player)
  //         util.listPlayer(player);
  //         this.fetchSeasons(player.id)
  //       })

  //     })
  // }

  fetchSeasons(playerId) {
    return fetch(`https://nba-player-individual-stats.p.rapidapi.com/playerseasons?playerId=${playerId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
        "x-rapidapi-key": "3810760e2cmsh322f7f5a3bf874ap1be58fjsn2ee382b1e5c1"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        // util.listRecentSeason(data);
        // console.log(data);
      })
  }

}




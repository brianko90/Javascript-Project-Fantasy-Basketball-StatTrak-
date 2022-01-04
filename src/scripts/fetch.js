import { Util } from './util.js'
let util = new Util();
export class Fetch {

  fetchPlayer(playerName) {
    let searchName = playerName.split(' ').join('_')
    return fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=${searchName}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
        "x-rapidapi-key": "3810760e2cmsh322f7f5a3bf874ap1be58fjsn2ee382b1e5c1"
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error("This player does not exist");
        }
        return res.json();
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      });

  }

  fetchSeasons(playerId) {
    return fetch(`https://nba-player-individual-stats.p.rapidapi.com/playerseasons?playerId=${playerId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
        "x-rapidapi-key": "3810760e2cmsh322f7f5a3bf874ap1be58fjsn2ee382b1e5c1"
      }
    })
      .then(res => {
        if(!res) {
          throw new Error("Player has not played yet");
        } else {
          return res.json();
        }
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  }

  fetchArticle(player){
    let playerName = `${player.firstName}-${player.lastName}`.toLowerCase();
    return fetch(`https://nba-latest-news.p.rapidapi.com/news/player/${playerName}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nba-latest-news.p.rapidapi.com",
        "x-rapidapi-key": "3810760e2cmsh322f7f5a3bf874ap1be58fjsn2ee382b1e5c1"
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error("There are no news articles")
        } else {
          return res.json();
        }
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  }

  fetchTeams() {
    return fetch("https://nba-player-individual-stats.p.rapidapi.com/teams", {
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
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  }

}




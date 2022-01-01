import { Fetch } from './fetch.js';
export class Util {
  
  listPlayer(player) {
    let playerView = document.querySelector('#player-view');
    let div = this.formatPlayerForList(player);
    playerView.appendChild(div);
    this.addPlayerInfo(player);
  }
  
  //Adding 
  addSeasons(data) {
    this.addTableToPlayer(data);
  }
  
  //Creating Player h3 element
  formatPlayerForList(player) {
    let h2 = document.createElement('h2');
    h2.innerText = `${player.firstName} ${player.lastName}`;
    let div = document.createElement('div');
    div.classList.add('playerDiv')
    let img = this.addImageToPlayer(player);
    div.appendChild(img);
    return div;
  }
  //Creating Player img
  addImageToPlayer(player) {
    const img = document.createElement('img');
    img.src = `${player.headShotUrl}`;
    img.classList.add('headshot');
    return img;
  }

  // Adding Basic Info of Player
  addPlayerInfo(player) {
    let div = Array.from(document.getElementsByClassName("playerDiv")).pop();
    let ul = document.createElement('ul');
    ul.classList.add('playerInfo');
    let name = `${player.firstName} ${player.lastName}`;
    let team = `${player.team}`;
    let position = `${player.position}`;
    let dob = `${player.dateOfBirth}`;
    let height = `${player.height}`;
    let weight = `${player.weight}`;
    let info = [name, team, position, dob, height, weight];
    info.forEach((el) => {
      let li = document.createElement('li');
      li.innerText = el;
      ul.appendChild(li);
    })
    
    div.append(ul);
  }

  addTableToPlayer(seasons) {
    let div = Array.from(document.getElementsByClassName("playerDiv")).pop();
    const categories = ["Season", "Team", "GP", "GS", "MPG", "PPG", "RPG",   "APG", "BPG", "FG%", "FT%", "3P%", "TO"]
    const table = document.createElement('table');
    table.classList.add('table');
    const row = document.createElement('tr');
    categories.forEach((cat) => {
      row.classList.add('categoryLabel')
      const label = document.createElement('th')
      label.classList.add('cat')
      label.textContent = cat;
      row.append(label);
    })
    table.append(row)
  
    for(let i=seasons.length - 1; i>seasons.length-4; i--) {
      const stats = [`${seasons[i].season}`,
                      `${seasons[i].team}`,
                      `${seasons[i].gamesPlayed}`,
                      `${seasons[i].gamesStarted}`,
                      `${seasons[i].minsPerGame}`,
                      `${seasons[i].pointsPerGame}`,
                      `${seasons[i].reboundsPerGame}`,
                      `${seasons[i].assistsPerGame}`,
                      `${seasons[i].blocksPerGame}`,
                      `${seasons[i].percentageFieldGoal}`,
                      `${seasons[i].percentageFreeThrow}`,
                      `${seasons[i].percentageThree}`,
                      `${seasons[i].turnoversPerGame}`]
      const row = document.createElement('tr');
      
      row.classList.add('seasonStats');
      stats.forEach((stat) => {
        row.classList.add('categoryValue');
        const value = document.createElement('td');
        value.classList.add('stat');
        value.textContent = stat;
        row.append(value);
      })
      table.append(row);
      
    }
    div.appendChild(table);
  }

  makeGraph() {
    
    const ctx = document.getElementById("myChart").getContext("2d");

    const labels = ["MPG", "PPG", "RPG", "APG", "BPG", "FG%", "FT%", "3P%", "TO"];

    const data = {
      labels: labels,
      datasets: [{
        data: [20, 30, 40, 40, 13, 15, 15 ,44, 13],
        label: "Player Averages"
      },
      {
        data: [10, 50, 20, 50, 3, 15, 15, 64, 3],
        label: "Player Averages"
      }]
    }

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
      }
    }

    const myChart = new Chart(ctx, config);
  }

  dataForGraph() {
    
    let seasons = Fetch.fetchSeasons(playerId)
    // let lastSeason = seasons.pop();
    console.log(seasons)
  }
}

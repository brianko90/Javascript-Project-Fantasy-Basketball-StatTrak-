import { Fetch } from './fetch.js';

const teamColor = {
  'ATL': 'rgba(225, 68, 52)',
  'BOS': 'rgba(0, 122, 51)',
  'CHA': 'rgba(0, 120, 140)',
  'CHI': 'rgba(206, 17, 65)',
  'CLE': 'rgba(134, 0, 56)',
  'DAL': 'rgba(0, 43, 92)',
  'DEN': 'rgba(81, 145, 205)',
  'DET': 'rgba(200,16,46)',
  'GS': 'rgba(255, 199, 44)',
  'HOU': 'rgba(206,17,65)',
  'IND': 'rgba(253, 187, 48)',
  'LAC': 'rgba(200,16,46)',
  'LAL': 'rgba(85, 37, 130)',
  'MEM': 'rgba(93, 118, 169)',
  'MIA': 'rgba(152, 0, 46)',
  'MIL': 'rgba(0, 71, 27)',
  'MIN': 'rgba(12, 35, 64)',
  'NO': 'rgba(180, 151, 90)',
  'NY': 'rgba(245, 132, 38)',
  'BKN': 'rgba(0, 0, 0)',
  'OKC': 'rgba(239, 59, 36)',
  'ORL': 'rgba(0, 125, 197)',
  'PHI': 'rgba(0, 107, 182)',
  'PHX': 'rgba(229, 95, 32)',
  'POR': 'rgba(224, 58, 62)',
  'SAC': 'rgba(91,43,130)',
  'SA': 'rgba(196, 206, 211)',
  'TOR': 'rgba(206, 17, 65)',
  'UTAH': 'rgba(0, 43, 92)',
  'WSH': 'rgba(227,24,55)rgba'};

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
    div.classList.add('playerDiv');
    div.classList.add(`${player.firstName}${player.lastName}`);
    let img = this.addImageToPlayer(player);
    div.appendChild(img);
    return div;
  }

  addRemoveButton(player, chart) {
    let div = Array.from(document.getElementsByClassName("playerDiv")).pop();
    let button = document.createElement('label');
    button.innerHTML = `<input type="submit">`;
    // ADDING A ICON BUTTON TO REMOVE PLAYER
    button.innerText = "X"
    button.classList.add('remove-button')
    button.classList.add(`${player.firstName}_${player.lastName}`);
    div.appendChild(button);

    button.addEventListener("click", async e => {
      //CODE TO REMOVE PLAYER
      e.preventDefault();
      this.removeDataFromGraph(player, chart);
      this.removePlayerBox(player);
    })
  }

  removePlayerBox(player) {
    let playerDiv = Array.from(document.getElementsByClassName(`${player.firstName}${player.lastName}`));
    playerDiv[0].remove();
    
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
    let className = ['name', 'team', 'position', 'dob', 'height', 'weight'];
    info.forEach((el, i) => {
      let li = document.createElement('li');
      li.innerText = el;
      li.classList.add(className[i]);
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
    categories.forEach((cat, i) => {
      row.classList.add('categoryLabel');
      const label = document.createElement('th');
      if(i === 0) {
        label.classList.add('firstCol');
      }
      label.classList.add('cat');
      label.textContent = cat;
      row.append(label);
    })
    table.append(row)
    let i = seasons.length - 1;
    while (i>=0 && i>seasons.length-4) {
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
      i--;
    }
    div.appendChild(table);
  }

  // Making graph that displays when opening webpage
  makeGraph() {
    
    const ctx = document.getElementById("myChart").getContext("2d");

    const labels = ["MPG", "PPG", "RPG", "APG", "BPG", "FG%", "FT%", "3P%", "TO"];

    const data = {
      labels: labels,
      datasets: [{
        data: [34.4, 23.7, 8.9, 6.5, 1.3, 54.1, 87.3 ,42.1, 2.9],
        label: "Average of Top 50"
      }]
    }

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Player Comparison Chart'
          }
        }
      }
    }

    const myChart = new Chart(ctx, config);
    return myChart;
  }

  // Adding each player to the graph
  addDataToGraph(chart, player, seasons) {
    let lastIndex = seasons.length -1;
    let lastSeason = seasons[lastIndex];
    let name = `${player.firstName} ${player.lastName}`
    let color = lastSeason.team;
    chart.data.datasets.push(
      {
        data: [Number(`${lastSeason.minsPerGame}`),
              Number(`${lastSeason.pointsPerGame}`),
              Number(`${lastSeason.reboundsPerGame}`),
              Number(`${lastSeason.assistsPerGame}`),
              Number(`${lastSeason.blocksPerGame}`),
              Number(`${lastSeason.percentageFieldGoal}`),
              Number(`${lastSeason.percentageFreeThrow}`),
              Number(`${lastSeason.percentageThree}`),
              Number(`${lastSeason.turnoversPerGame}`)],
        label: name,
        backgroundColor: teamColor[color],
        borderColor: "black"      
      }
    ) 
    chart.update();
  }

  // Removing player from graph when player is deselected
  removeDataFromGraph(player, chart) {
    let dataSets = chart.data.datasets;
    let playerName = `${player.firstName} ${player.lastName}`;

    dataSets.forEach((set, i) => {
      if(playerName === set.label) {
        dataSets.splice(i, 1);
      }
    })

    chart.update();
  }

  addArticle(player, articles){
    if (articles.length === 0) return;
    let div = Array.from(document.getElementsByClassName("playerDiv")).pop();
    let articleContainer = document.createElement('div');
    articleContainer.innerText = "Recent News";
    articleContainer.classList.add('articleContainer')
    if (articles.length > 2) {
      for(let i=0; i<3; i++) {
        let articleA = document.createElement('a');
        articleA.innerText = article.title;
        articleA.href = article.url;
        articleContainer.appendChild(articleA);
      }
    } else {
      articles.forEach((article, i) => {
        let articleA = document.createElement('a');
        articleA.innerText = `Story ${i + 1}`
        articleA.href = article.url;
        articleContainer.appendChild(articleA);
      })
    }
    div.append(articleContainer);
  }
}

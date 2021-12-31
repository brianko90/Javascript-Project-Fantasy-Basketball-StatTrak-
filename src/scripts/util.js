export class Util {
  listPlayer(player) {
    let playerView = document.querySelector('#player-view');
    // let img = this.addImageToPlayer(player);
    let div = this.formatPlayerForList(player);
    // playerView.appendChild(img);
    playerView.appendChild(div);
    this.addPlayerInfo(player);
    // const statsUl = document.createElement('ul');

  }

  // listRecentSeason(playerSeasons) {
  //   const recent = playerSeasons[playerSeasons.length - 1];
  //   console.log(recent);
  //   const ul = document.querySelector('#player-list');// `.${recent.playerId}`
  //   const div = document.createElement('div');
  //   let ppg = recent.pointsPerGame;
  //   if(ppg === undefined) {
  //     ppg = 0;
  //   }
  //   div.innerText = `${ppg}`
  //   ul.appendChild(div);
  // }

  getRecentSeason(playerId) {

  }
  //Creating Player h3 element
  formatPlayerForList(player) {
    let h2 = document.createElement('h2');
    h2.innerText = `${player.firstName} ${player.lastName}`;
    let div = document.createElement('div');
    div.classList.add('playerDiv')
    let img = this.addImageToPlayer(player);
    // div.setAttribute("id", `${player.id}`)
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

  addCategoryToPlayer(player) {

  }

  addStatsToPlayer(player) {

  }
}


// *** MAKE TABLE  https://www.w3schools.com/html/html_tables.asp
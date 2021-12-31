export class Util {
  listPlayer(player) {
    const ul = document.querySelector('#player-list');
    const li = document.createElement('li');
    li.innerText = `${player.firstName} ${player.lastName}`;
    li.classList.add(`${player.id}`)
    ul.appendChild(li);
  }

  listRecentSeason(playerSeasons) {
    const recent = playerSeasons[playerSeasons.length - 1];
    console.log(recent);
    const ul = document.querySelector('#player-list');// `.${recent.playerId}`
    const div = document.createElement('div');
    div.innerText = `${recent.pointsPerGame}`
    ul.appendChild(div);
  }
}

import {Fetch} from './fetch.js';
import {Util} from './util.js';

document.addEventListener("DOMContentLoaded", e => {
  console.log("dom ready")
  let fetchUtil = new Fetch();
  let util = new Util();
  
  let searchForm = document.querySelector('#main-search');
  let player = [];
  searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    const nameInput = document.querySelector('#player-name');
    const playerName = nameInput.value;
    nameInput.value = '';
    let player = await fetchUtil.fetchPlayer(playerName);
    let seasons = await fetchUtil.fetchSeasons(player.id);
    util.listPlayer(player);
    util.addSeasons(seasons);
  })
  util.makeGraph();
})


// ****** FIND OUT HOW TO GET GRAPH TO DISPLAY ONLY ONCE AND THEN 
//        ADD PLAYER DATA TO IT ******f
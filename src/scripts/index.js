import {Fetch} from './fetch.js';
import {Util} from './util.js';

document.addEventListener("DOMContentLoaded", e => {
  console.log("dom ready")
  let fetchUtil = new Fetch();
  let util = new Util();
  // let player;
  // fetchUtil.fetchPlayer();
  
  let searchForm = document.querySelector('#main-search')
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const nameInput = document.querySelector('#player-name');
    const playerName = nameInput.value;
    console.log(playerName);
    nameInput.value = '';
    fetchUtil.fetchPlayer(playerName);
  })
})



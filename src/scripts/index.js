import {Fetch} from './fetch.js';
import {Util} from './util.js';
import {Button} from './buttonUtil.js';
import { SearchUtil } from './searchUtil.js';
document.addEventListener("DOMContentLoaded", e => {
  // let sidebar = document.
  let search = new SearchUtil();
  let fetch = new Fetch();
  let util = new Util();
  
  let searchForm = document.querySelector('#main-search');
  const chart = util.makeGraph(); 

  searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    search.toggleSearch();
    search.toggleSpinner();
    const nameInput = document.querySelector('#player-name');
    const playerName = nameInput.value;
    nameInput.value = '';
    let player = await fetch.fetchPlayer(playerName);
    let seasons = await fetch.fetchSeasons(player.id);
    let articles = await fetch.fetchArticle(player);
    // put code to make loading circle disappear and search bar appear
    util.listPlayer(player);
    util.addSeasons(seasons);
    util.addArticle(player, articles);
    util.addRemoveButton(player, chart);
    util.addDataToGraph(chart, player, seasons);
    search.toggleSearch();
    search.toggleSpinner();
  })
  
})

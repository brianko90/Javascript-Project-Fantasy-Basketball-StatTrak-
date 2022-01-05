import {Fetch} from './fetch.js';
import {Util} from './util.js';
import {SearchUtil} from './searchUtil.js';

document.addEventListener("DOMContentLoaded", async e => {
  let search = new SearchUtil();
  let fetch = new Fetch();
  let util = new Util();
  let teams = await fetch.fetchTeams()
  util.addTeamsToDropdown(teams)

  let dropdownButton = document.querySelector('.dropdown');
  dropdownButton.addEventListener("click", search.toggleDropdown);
  
  const chart = util.makeGraph(); 

  let searchForm = document.querySelector('#main-search');
  searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    search.toggleSearch();
    search.toggleSpinner();
    const nameInput = document.querySelector('#player-name');
    const playerName = nameInput.value;
    nameInput.value = '';
    let player = await fetch.fetchPlayer(playerName);
    if(player) {
      let seasons = await fetch.fetchSeasons(player.id);
      let articles = await fetch.fetchArticle(player);
      util.listPlayer(player);
      util.addSeasons(seasons);
      util.addArticle(player, articles);
      util.addRemoveButton(player, chart);
      util.addDataToGraph(chart, player, seasons);
    } else {
      search.toggleError();
      setTimeout(search.toggleError, 2000);
    }
    search.toggleSearch();
    search.toggleSpinner();
  })
  
})

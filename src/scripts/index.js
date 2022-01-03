import {Fetch} from './fetch.js';
import {Util} from './util.js';

document.addEventListener("DOMContentLoaded", e => {
  console.log("dom ready")
  let fetchUtil = new Fetch();
  let util = new Util();
  
  let searchForm = document.querySelector('#main-search');
  let player = [];
  const chart = util.makeGraph();
  searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    const nameInput = document.querySelector('#player-name');
    const playerName = nameInput.value;
    nameInput.value = '';
    let player = await fetchUtil.fetchPlayer(playerName);
    let seasons = await fetchUtil.fetchSeasons(player.id);
    let articles = await fetchUtil.fetchArticle(player);
    util.listPlayer(player);
    util.addSeasons(seasons);
    util.addRemoveButton(player, chart);
    util.addDataToGraph(chart, player, seasons);
    util.addArticle(player, articles);
  })
  
})


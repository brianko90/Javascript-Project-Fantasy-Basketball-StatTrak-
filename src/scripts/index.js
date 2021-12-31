import {Fetch} from './fetch.js';
import {Util} from './util.js';

document.addEventListener("DOMContentLoaded", e => {
  console.log("dom ready")
  let fetchUtil = new Fetch();
  let util = new Util();
  let player;
  fetchUtil.fetchTeam()
  
  // console.log(player)
})



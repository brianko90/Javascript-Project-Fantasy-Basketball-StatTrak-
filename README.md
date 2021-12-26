# Javascript Project - Fantasy Basketball StatTrak

## Background

Fantasy basketball is a popular online game where a group of players draft real professional NBA players onto their team. Throughout the season, you are placed in head to head matchups against your fellow league members, in which the winner is determined by the stats produced by the NBA players that you play on your team. A players record is determined by the performance of their team throughout the season. The winner of a fantasy basketball team is the last team standing after a long season and postseason. 

Fantasy Basketball StatTrak is a single stop webpage for all your fantasy basketball statistical data needs. The website is a gold mine for people looking to gain a competitive edge before their fantasy drafts and also for throughout the season. A user has access to past data on NBA players statistics and the league averages of each position which allows them to make educated and strategic decisions on who they would want to draft for their team. 

## Functionality & MVPs

On the Fantasy Basketball StatTrak website, users will be able to:

- View players statistics from their previous seasons
- Compare these statistics to the league average and to the average of their played position
- Search for players based on their team or their position
- Sort lists of players based on their statistics (Ascending, descending)
- Create their own mock team to visualize their total stats

## WireFrames

![Wireframe1](/images/wireframe1.png)

- This will be the most important part since it displays the most information and data.
- The nav links will let users access my information.
- On the right side, there is a mock team creator, where you can add players from the main search area by pressing the (+) next to player. 
- Each of the statistical categories will be displayed above the player slots. 
- When you click on each player, there will be a popup window that will display the past years statistics of the player and a graph showing their average stats relative to the league/position average.
![Wireframe2](/images/wireframe2.png)

## Technologies, Libraries, APIs

This project will be implemented using the following technologies:

- The [D3 library](https://d3js.org/) to construct graphs of players statistics compared to league averages
- The [API-NBA](https://rapidapi.com/api-sports/api/api-nba/) and [NBA Stats API](https://any-api.com/nba_com/nba_com/docs/API_Description) to gather information and statistics to display

## Implementation Timeline

NB: 

- **Friday Afternoon & Weekend:** Setup the project. Implement the D3 library and test around to see how data will be visualized. Create basic layout of webpage and start using API's to gather data.

- **Monday:** This day will be used to figure out and display averages so that when you look at a players data, they can be shown next to averages. Begin working on sorting features to display information according to team and position. 

- **Tuesday:** Finish working on sorting methods. Then I will implement a popup window for player statistics when you click on a players name. 

- **Wednesday:** If ahead of schedule, I will try to implement bonus features such as the age warning and stat dropoff warning. If not, I will continue to work on popup window for players. 

- **Thursday:** Complete finishing touches, make webpage look amazing. Apply as much CSS and html magic that I can. 

## Bonus features

If time allows during the project coursetime, or for future updates after:

- Add an age warning, where the age of a player shown is in a different color based on their age relative to the average age when players usually start to decline (over AVG: red, within 1-2 years of AVG: yellow, well below AVG: green)
- Add a stat drop off warning, if a players statistics have been steadily dropping over the past three seasons. We could display a warning next to the players name that he has been steadily declining in performance. 



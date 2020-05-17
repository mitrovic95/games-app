import { Component, OnInit } from "@angular/core";
import { Game } from "src/models/GameModel";
import { UserPreference } from "src/models/UserPreference";

@Component({
  selector: "game-schedule",
  templateUrl: "./game-schedule.component.html",
  styleUrls: ["./game-schedule.component.scss"],
})
export class GameScheduleComponent implements OnInit {
  games: Game[];
  filterActive: boolean;

  constructor() {}

  ngOnInit() {
    this.initGames();
  }

  initGames() {
    this.games = [];
    this.games.push(
      new Game(
        1,
        "Giacomo Guilizzoni",
        new Date(2020, 3, 9, 11),
        "Monopoly",
        "Zoom",
        "https://www.google.com/",
        "https://www.google.com/"
      ),
      new Game(
        2,
        "Marco Botton Tuttafare",
        new Date(2020, 3, 9, 18),
        "Yahtzee",
        "Hangouts",
        "https://www.google.com/",
        "https://www.google.com/"
      ),
      new Game(
        3,
        "Mariah Maclachlan",
        new Date(2020, 3, 10, 11),
        "Risk",
        "Facebook",
        "https://www.google.com/",
        "https://www.google.com/"
      ),
      new Game(
        4,
        "Valerie Liberty",
        new Date(2020, 3, 10, 17),
        "Porchees",
        "Zoom",
        "https://www.google.com/",
        "https://www.google.com/"
      )
    );
  }

  filter() {
    if (this.filterActive) {
      this.filterActive = false;
      this.initGames();
    } else {
      if(localStorage.getItem("userPreference")){

        this.filterActive = true;
        let userPreference: UserPreference = JSON.parse(
          localStorage.getItem("userPreference")
        );
        let gameFilter: Game[] = [];
        this.games.forEach((game) => {
          let playTimeDate = new Date(userPreference.playTimeDate);
          let startDate = new Date(userPreference.playTimeStart);
          startDate.setFullYear(playTimeDate.getFullYear());
          let endDate = new Date(userPreference.playTimeEnd);
          endDate.setFullYear(playTimeDate.getFullYear());
          if (game.date > startDate && game.date < endDate) {
            gameFilter.push(game);
          }
        });
        this.games = gameFilter;
      }
      else{
        alert('Please set user preference');
      }
    }
  }
}

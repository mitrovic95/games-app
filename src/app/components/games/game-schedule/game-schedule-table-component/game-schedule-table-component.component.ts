import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/models/GameModel';

@Component({
  selector: 'app-game-schedule-table-component',
  templateUrl: './game-schedule-table-component.component.html',
  styleUrls: ['./game-schedule-table-component.component.scss']
})
export class GameScheduleTableComponentComponent implements OnInit {

  @Input() games: Game[]; 

  constructor() { }

  ngOnInit() {
  }

}

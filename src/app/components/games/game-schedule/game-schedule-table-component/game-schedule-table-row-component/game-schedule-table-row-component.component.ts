import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/models/GameModel';

@Component({
  selector: '[app-game-schedule-table-row-component]',
  templateUrl: './game-schedule-table-row-component.component.html',
  styleUrls: ['./game-schedule-table-row-component.component.scss']
})
export class GameScheduleTableRowComponentComponent implements OnInit {

  @Input() game: Game; 

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'user-game-list',
  templateUrl: './user-game-list.component.html',
  styleUrls: ['./user-game-list.component.scss']
})
export class UserGameListComponent implements OnInit, AfterViewInit {

  valid: boolean = true;
  form: FormGroup;
  userGameList = [
    { 
      id: 1, 
      name: "Marco Botton Tuttafare",
      date: new Date('October 1, 2016 12:00:00 GMT+0000'), 
      startTime: new Date('October 1, 2016 12:00:00 GMT+0000').getTime(), 
      game: "Yahtzee", 
      method: "Zoom", 
      sendPlayerMessage: "link", 
      startLink: ""
    },
    { 
      id: 2, 
      name: "Gioacomo Guilizzoni",
      date: new Date('October 1, 2016 12:00:00 GMT+0000'), 
      startTime: new Date('October 1, 2016 12:00:00 GMT+0000').getTime(), 
      game: "Monopoly", 
      method: "Zoom", 
      sendPlayerMessage: "link", 
      startLink: ""
    },
    { 
      id: 3, 
      name: "Mariah Maclachlan",
      date: new Date('October 1, 2016 12:00:00 GMT+0000'), 
      startTime: new Date('October 1, 2016 12:00:00 GMT+0000').getTime(), 
      game: "Battleship", 
      method: "Zoom", 
      sendPlayerMessage: "link", 
      startLink: ""
    },
    { 
      id: 4, 
      name: "Valerie Liberty",
      date: new Date('October 1, 2016 12:00:00 GMT+0000'), 
      startTime: new Date('October 1, 2016 12:00:00 GMT+0000').getTime(), 
      game: "Win, Lose or Draw", 
      method: "Zoom", 
      sendPlayerMessage: "link", 
      startLink: ""
    },
    { 
      id: 5, 
      name: "Valerie Liberty",
      date: new Date('October 1, 2016 12:00:00 GMT+0000'), 
      startTime: new Date('October 1, 2016 12:00:00 GMT+0000').getTime(), 
      game: "Porcheesi", 
      method: "Zoom", 
      sendPlayerMessage: "link", 
      startLink: ""
    }
  ]

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      game: new FormControl(''),
    });
  }

  submit() { 
    this.valid = true;
    this.userGameList.forEach(singleGame => {
      if (this.form.value.game.toLowerCase() === singleGame.game.toLowerCase( )) {
        return this.valid = false;
      }
    });
    if (this.valid) {
      this.userGameList.push({
        id: this.userGameList[this.userGameList.length-1].id+1, 
        name: "",
        date: null, 
        startTime: null, 
        game: this.form.value.game, 
        method: "", 
        sendPlayerMessage: "", 
        startLink: ""
      });
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#1').prop('checked', false);
    $('#3').prop('indeterminate', true);
    $('#4').prop('indeterminate', true);
  }
}

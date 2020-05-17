import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  logIn(){
    window.localStorage.setItem('logedIn', 'true');
  }
}

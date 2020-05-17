import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  logedIn: boolean = JSON.parse(window.localStorage.getItem('logedIn'));

  ngOnInit() {
    // window.localStorage.setItem('logedIn', 'false');
  }
}

import { GameScheduleTableComponentComponent } from './components/games/game-schedule/game-schedule-table-component/game-schedule-table-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserMenuComponent } from './components/users/user-menu/user-menu.component';
import { UserGameListComponent } from './components/users/user-game-list/user-game-list.component';
import { GameScheduleComponent } from './components/games/game-schedule/game-schedule.component';
import { UserSchedulePreferenceComponent } from './components/users/user-schedule-preference/user-schedule-preference.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GameScheduleTableRowComponentComponent } from './components/games/game-schedule/game-schedule-table-component/game-schedule-table-row-component/game-schedule-table-row-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    UserMenuComponent,
    UserGameListComponent,
    GameScheduleComponent,
    UserSchedulePreferenceComponent,
    HomeComponent,
    GameScheduleTableComponentComponent,
    GameScheduleTableRowComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMenuComponent } from './components/users/user-menu/user-menu.component';
import { HomeComponent } from './components/home/home.component';
import { GameScheduleComponent } from './components/games/game-schedule/game-schedule.component';
import { UserGameListComponent } from './components/users/user-game-list/user-game-list.component';
import { UserSchedulePreferenceComponent } from './components/users/user-schedule-preference/user-schedule-preference.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'game-schedule', component: GameScheduleComponent },
  { path: 'user-menu', component: UserMenuComponent },
  { path: 'user-game-list', component: UserGameListComponent },
  { path: 'user-schedule-preference', component: UserSchedulePreferenceComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

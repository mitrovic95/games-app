import { UserPreference } from './../../../../models/UserPreference';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'user-schedule-preference',
  templateUrl: './user-schedule-preference.component.html',
  styleUrls: ['./user-schedule-preference.component.scss']
})
export class UserSchedulePreferenceComponent implements OnInit {
  form: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();

  }

  createForm(){
    if(localStorage.getItem("userPreference")){
      let userPreference: UserPreference = JSON.parse(
        localStorage.getItem("userPreference")
      );
      let playTimeDate = new Date(userPreference.playTimeDate);
      let startDate = new Date(userPreference.playTimeStart);
      let endDate = new Date(userPreference.playTimeEnd);
      this.form = this.formBuilder.group({
        'playDate' : new FormControl({year: playTimeDate.getFullYear(), month: playTimeDate.getMonth()+1, day: playTimeDate.getDate()}),
        'playTimeStart' :  [{hour: startDate.getHours(), minute: 0}, Validators.required],
        'playTimeEnd' : [{hour: endDate.getHours(), minute: 0}, Validators.required],
        'newPeople' : [userPreference.newPeople, Validators.required],
      });
    }
    else{
      this.form = this.formBuilder.group({
        'playDate' : [new Date(), Validators.required],
        'playTimeStart' :  [{hour: 1, minute: 0}, Validators.required],
        'playTimeEnd' : [{hour: 1, minute: 0}, Validators.required],
        'newPeople' : [true, Validators.required],
      });
    }
  }

  save(){
    let playTimeDate: Date = new Date(
      this.form.get('playDate').value.year, 
      this.form.get('playDate').value.month - 1, 
      this.form.get('playDate').value.day, 
    )
    let playTimeStart: Date = new Date(
      this.form.get('playDate').value.year, 
      this.form.get('playDate').value.month - 1, 
      this.form.get('playDate').value.day, 
      this.form.get('playTimeStart').value.hour, 
      )
      let playTimeEnd: Date = new Date(
        this.form.get('playDate').value.year, 
        this.form.get('playDate').value.month - 1, 
        this.form.get('playDate').value.day, 
        this.form.get('playTimeEnd').value.hour, 
        )
      
    let userPreference = new UserPreference(playTimeDate, playTimeStart, playTimeEnd, this.form.get('newPeople').value);

    localStorage.setItem('userPreference', JSON.stringify(userPreference));
    this.router.navigateByUrl('/game-schedule');
  }

}

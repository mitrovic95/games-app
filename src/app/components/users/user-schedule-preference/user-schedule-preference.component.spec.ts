import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSchedulePreferenceComponent } from './user-schedule-preference.component';

describe('UserSchedulePreferenceComponent', () => {
  let component: UserSchedulePreferenceComponent;
  let fixture: ComponentFixture<UserSchedulePreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSchedulePreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSchedulePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

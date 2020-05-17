import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScheduleTableComponentComponent } from './game-schedule-table-component.component';

describe('GameScheduleTableComponentComponent', () => {
  let component: GameScheduleTableComponentComponent;
  let fixture: ComponentFixture<GameScheduleTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameScheduleTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScheduleTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

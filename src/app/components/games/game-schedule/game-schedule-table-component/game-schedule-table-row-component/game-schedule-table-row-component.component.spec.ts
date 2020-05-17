import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScheduleTableRowComponentComponent } from './game-schedule-table-row-component.component';

describe('GameScheduleTableRowComponentComponent', () => {
  let component: GameScheduleTableRowComponentComponent;
  let fixture: ComponentFixture<GameScheduleTableRowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameScheduleTableRowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScheduleTableRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

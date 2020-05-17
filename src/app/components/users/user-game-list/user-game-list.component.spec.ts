import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameListComponent } from './user-game-list.component';

describe('UserGameListComponent', () => {
  let component: UserGameListComponent;
  let fixture: ComponentFixture<UserGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

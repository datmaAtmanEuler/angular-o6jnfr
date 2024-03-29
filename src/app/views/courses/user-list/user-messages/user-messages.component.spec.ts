import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessagesComponent } from './user-messages.component';

describe('UserProfileComponent', () => {
  let component: UserMessagesComponent;
  let fixture: ComponentFixture<UserMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

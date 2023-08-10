import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoxChatComponent } from './main-box-chat.component';

describe('MainBoxChatComponent', () => {
  let component: MainBoxChatComponent;
  let fixture: ComponentFixture<MainBoxChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBoxChatComponent]
    });
    fixture = TestBed.createComponent(MainBoxChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

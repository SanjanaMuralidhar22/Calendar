import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMeetingsComponent } from './display-meetings.component';

describe('DisplayMeetingsComponent', () => {
  let component: DisplayMeetingsComponent;
  let fixture: ComponentFixture<DisplayMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMeetingsComponent]
    });
    fixture = TestBed.createComponent(DisplayMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

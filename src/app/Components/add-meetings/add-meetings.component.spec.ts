import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeetingsComponent } from './add-meetings.component';

describe('AddMeetingsComponent', () => {
  let component: AddMeetingsComponent;
  let fixture: ComponentFixture<AddMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMeetingsComponent]
    });
    fixture = TestBed.createComponent(AddMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

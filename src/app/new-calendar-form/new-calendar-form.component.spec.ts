import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalendarFormComponent } from './new-calendar-form.component';

describe('NewCalendarFormComponent', () => {
  let component: NewCalendarFormComponent;
  let fixture: ComponentFixture<NewCalendarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCalendarFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewCalendarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

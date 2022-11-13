import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkoutFormComponent } from './new-workout-form.component';

describe('NewWorkoutFormComponent', () => {
  let component: NewWorkoutFormComponent;
  let fixture: ComponentFixture<NewWorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewWorkoutFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

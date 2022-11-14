import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNutritionFormComponent } from './new-nutrition-form.component';

describe('NewNutritionFormComponent', () => {
  let component: NewNutritionFormComponent;
  let fixture: ComponentFixture<NewNutritionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewNutritionFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewNutritionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

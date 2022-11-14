import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNutritionnComponent } from './list-nutritionn.component';

describe('ListNutritionnComponent', () => {
  let component: ListNutritionnComponent;
  let fixture: ComponentFixture<ListNutritionnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNutritionnComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListNutritionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

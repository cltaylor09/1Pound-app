import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalendarsComponent } from './list-calendars.component';

describe('ListCalendarsComponent', () => {
  let component: ListCalendarsComponent;
  let fixture: ComponentFixture<ListCalendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCalendarsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

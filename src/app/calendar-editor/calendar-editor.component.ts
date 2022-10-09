import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar-editor',
  templateUrl: './calendar-editor.component.html',
  styleUrls: ['./calendar-editor.component.css']
})
export class CalendarEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarForm = new FormGroup({
    day: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    muscle: new FormControl(''),
    time: new FormControl(''),
    activity: new FormControl('', Validators.required)
  
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.calendarForm.value);
  }

}

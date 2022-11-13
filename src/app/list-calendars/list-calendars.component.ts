import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-list-calendars',
  templateUrl: './list-calendars.component.html',
  styleUrls: ['./list-calendars.component.css']
})
export class ListCalendarsComponent implements OnInit {

  public calendars: any;
  constructor(private _myService: CalendarService) { }
  ngOnInit() {
    this.getCalendars();
  }

  getCalendars() {
    this._myService.getCalendars().subscribe(
      data => { this.calendars = data },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(calendarId: string) {
    this._myService.deleteCalendar(calendarId);
  }

}

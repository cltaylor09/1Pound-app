import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-new-calendar-form',
  templateUrl: './new-calendar-form.component.html',
  styleUrls: ['./new-calendar-form.component.css']
})
export class NewCalendarFormComponent implements OnInit {
  @Input() day: string = "";
  @Input() month: string = "";
  @Input() year: string = "";
  @Input() activity: string = "";
  @Input() duration: string = "";

  public mode = 'Add';
  private id: any;
  private calendar: any;


  constructor(private _myService: CalendarService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit';
        this.id = paramMap.get('_id');


        this._myService.getCalendar(this.id).subscribe(
          data => {
            this.calendar = data;
            this.day = this.calendar.day;
            this.month = this.calendar.month;
            this.year = this.calendar.year;
            this.activity = this.calendar.activity;
            this.duration = this.calendar.duration;
          },
          err => console.error(err),
          () => console.log('finished loading')
        );
      }
      else {
        this.mode = 'Add';
        this.id = null;
      }
    });
  }


  onSubmit() {
    console.log("You submitted: " + this.mode + " " + this.day + " " + this.month + " " + this.year + " " + this.activity + " " + this.duration);
    if (this.mode == 'Add')
      this._myService.addCalendars(this.day, this.month, this.year, this.activity, this.duration);
    if (this.mode == 'Edit')
      this._myService.updateCalendar(this.id, this.day, this.month, this.year, this.activity, this.duration);
    this.router.navigate(['/listCalendars']);
  }
}

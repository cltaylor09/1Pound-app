import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CalendarService {

    constructor(private http: HttpClient) { }

    getCalendars() {
        return this.http.get('http://localhost:8000/calendars');
    }

    getCalendar(calendarId: string) {
        return this.http.get('http://localhost:8000/calendars/' + calendarId);
    }

    addCalendars(day: string, month: string, year: string, activity: string, duration: string) {
        this.http.post('http://localhost:8000/calendars', { day, month, year, activity, duration })
            .subscribe((responseData) => {
                console.log(responseData);
                console.log("added new calendar")
            });
    }

    updateCalendar(calendarId: string, day: string, month: string, year: string, activity: string, duration: string) {
        this.http.put("http://localhost:8000/calendars/" +
            calendarId, { day, month, year, activity, duration })
            .subscribe(() => {
                console.log('Updated: ' + calendarId);
            });
    }
    deleteCalendar(calendarId: string) {
        this.http.delete("http://localhost:8000/calendars/" + calendarId)
            .subscribe(() => {
                console.log('Deleted: ' + calendarId);
            });
        location.reload();
    }
}

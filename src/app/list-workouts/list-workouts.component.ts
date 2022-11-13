import { Component, OnInit } from '@angular/core';
import { WorkoutService } from "../workout.service";

@Component({
  selector: 'app-list-workouts',
  templateUrl: './list-workouts.component.html',
  styleUrls: ['./list-workouts.component.css']
})
export class ListWorkoutsComponent implements OnInit {
  public workouts: any;
  constructor(private _myService: WorkoutService) { }
  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts() {
    this._myService.getWorkouts().subscribe(
      data => { this.workouts = data },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(workoutId: string) {
    this._myService.deleteWorkout(workoutId);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { WorkoutService } from "../workout.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-workout-form',
  templateUrl: './new-workout-form.component.html',
  styleUrls: ['./new-workout-form.component.css']
})
export class NewWorkoutFormComponent implements OnInit {
  @Input() muscleGroup: string = "";
  @Input() reps: string = "";

  public mode = 'Add';
  private id: any;
  private workout: any;

  constructor(private _myService: WorkoutService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit';
        this.id = paramMap.get('_id');

        //request student info based on the id
        this._myService.getWorkout(this.id).subscribe(
          data => {
            this.workout = data;
            this.muscleGroup = this.workout.muscleGroup;
            this.reps = this.workout.reps;
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
    console.log("You submitted: " + this.muscleGroup + " " + this.reps);
    if (this.mode == 'Add')
      this._myService.addWorkouts(this.muscleGroup, this.reps);
    if (this.mode == 'Edit')
      this._myService.updateWorkout(this.id, this.muscleGroup, this.reps);
    this.router.navigate(['/listWorkouts']);
  }
}

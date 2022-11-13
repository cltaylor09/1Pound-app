import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkouts() {
    return this.http.get('http://localhost:8000/workouts');
  }

  addWorkouts(muscleGroup: string, reps: string) {
    this.http.post('http://localhost:8000/workouts', { muscleGroup, reps })
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  deleteWorkout(workoutId: string) {
    this.http.delete("http://localhost:8000/workouts/" + workoutId)
      .subscribe(() => {
        console.log('Deleted: ' + workoutId);
      });
    location.reload();
  }
  updateWorkout(workoutId: string, muscleGroup: string, reps: string) {
    this.http.put("http://localhost:8000/workouts/" +
      workoutId, { muscleGroup, reps })
      .subscribe(() => {
        console.log('Updated: ' + workoutId);
      });
  }

  getWorkout(workoutId: string) {
    return this.http.get('http://localhost:8000/workouts/' + workoutId);
  }
}

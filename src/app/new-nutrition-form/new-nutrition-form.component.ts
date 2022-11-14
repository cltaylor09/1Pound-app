import { Component, OnInit, Input } from '@angular/core';
import { NutritionService } from '../nutrition.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Date } from 'mongoose';

@Component({
  selector: 'app-new-nutrition-form',
  templateUrl: './new-nutrition-form.component.html',
  styleUrls: ['./new-nutrition-form.component.css']
})
export class NewNutritionFormComponent implements OnInit {


  @Input() date: string = "";
  @Input() meal: string = "";
  @Input() food: string = "";
  @Input() calories: string = "";

  public mode = 'Add';
  private id: any;
  private nutrition: any;

  constructor(private _myService: NutritionService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit';
        this.id = paramMap.get('_id');

        this._myService.getNutrition(this.id).subscribe(
          data => {
            this.nutrition = data;

            this.date = this.nutrition.date;
            this.meal = this.nutrition.meal;
            this.food = this.nutrition.food;
            this.calories = this.nutrition.calories;
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
    console.log("You submitted: " + this.date + " " + this.meal + " " + this.food + " " + this.calories);

    if (this.mode == 'Add')
      this._myService.addNutritionn(this.date, this.meal, this.food, this.calories);
    if (this.mode == 'Edit')
      this._myService.updateNutrition(this.id, this.date, this.meal, this.food, this.calories);
    this.router.navigate(['/listNutritionn']);
  }

}

import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../nutrition.service';


@Component({
  selector: 'app-list-nutritionn',
  templateUrl: './list-nutritionn.component.html',
  styleUrls: ['./list-nutritionn.component.css']
})
export class ListNutritionnComponent implements OnInit {

  title = 'Nutrition Page';

  public nutritionn: any;

  constructor(private _myService: NutritionService) { }
  ngOnInit() {
    this.getNutritionn();
  }
  getNutritionn() {
    this._myService.getNutritionn().subscribe(
      data => { this.nutritionn = data },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(nutritionId: string) {
    this._myService.deleteNutrition(nutritionId);
  }

}

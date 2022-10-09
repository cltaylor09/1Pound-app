import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-nutrition',
    templateUrl: './nutrition.component.html',
    styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    nutritionForm = new FormGroup({
        date: new FormControl('', Validators.required),
        meals: new FormControl(''),
        foodIntake: new FormControl('', Validators.required),
        calories: new FormControl('', Validators.required),
    });
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

//the class
export class HomePageComponent implements OnInit {
    imageSrc = "assets/img/gym.jpg"
    imageAlt = "gym"
    constructor() { }
    ngOnInit() {
    }
}

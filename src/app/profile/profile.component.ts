import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

//@ shows that this is a declarator 
//@Component tells that it is a Component
//selector: the name of the html tag that you will use to add component to html
//templateUrl: tells where to find the template
//styleUrls: css for the template
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

//the class
export class ProfileComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
    profileForm = new FormGroup({
        userName: new FormControl(''),
        userPassword: new FormControl(''),
        userEmail: new FormControl(''),
        userAddress: new FormGroup({
            userStreet: new FormControl(''),
            userCity: new FormControl(''),
            userState: new FormControl(''),
            userZip: new FormControl(''),
        }),
    });
}
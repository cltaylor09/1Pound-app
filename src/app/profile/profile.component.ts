import {Component,OnInit} from '@angular/core';

//@ shows that this is a declarator 
//@Component tells that it is a Component
//selector: the name of the html tag that you will use to add component to html
//templateUrl: tells where to find the template
//styleUrls: css for the template
@Component ({
    selector: 'app-warning-message',
    templateUrl: './profile.component.html', 
    styleUrls: ['./profile.component.css'] 
})

//the class
export class WarningMessageComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
}
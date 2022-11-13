import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() userName: string = "";
  @Input() userPass: string = "";
  @Input() userEmail: string = "";

  public mode = 'Add';
  private id: any;
  private profile: any;

  constructor(private _myService: ProfileService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit';
        this.id = paramMap.get('_id');

        this._myService.getUser(this.id).subscribe(
          data => {
            this.profile = data;
            this.firstName = this.profile.firstName;
            this.lastName = this.profile.lastName;
            this.userName = this.profile.userName;
            this.userPass = this.profile.userPass;
            this.userEmail = this.profile.userEmail;
          },
          err => console.error(err),
          () => console.log('finished loading')
        );
      }
      else {
        this.mode = 'New';
        this.id = null;
      }
    });
  }

  onSubmit() {
    console.log("You submitted: " + this.firstName + " " + this.lastName + " " + this.userName + " " + this.userPass + " " + this.userEmail);
    if (this.mode == 'New')
      this._myService.addUserProfiles(this.firstName, this.lastName, this.userName, this.userPass, this.userEmail);
    if (this.mode == 'Edit')
      this._myService.updateUserProfile(this.id, this.firstName, this.lastName, this.userName, this.userPass, this.userEmail);
    this.router.navigate(['/listProfiles']);
  }
}
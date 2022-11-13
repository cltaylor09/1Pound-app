import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  public profiles: any;
  constructor(private _myService: ProfileService) { }
  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this._myService.getUserProfiles().subscribe(
      data => { this.profiles = data },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(profileId: string) {
    this._myService.deleteUserProfile(profileId);
  }
}

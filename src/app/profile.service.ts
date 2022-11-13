import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient) { }

    getUserProfiles() {
        return this.http.get('http://localhost:8000/profiles');
    }

    addUserProfiles(firstName: string, lastName: string, userName: string, userPass: string, userEmail: string) {
        this.http.post('http://localhost:8000/profiles', { firstName, lastName, userName, userPass, userEmail })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }

    deleteUserProfile(profileId: string) {
        this.http.delete("http://localhost:8000/profiles/" + profileId)
            .subscribe(() => {
                console.log('Deleted: ' + profileId);
            });
        location.reload()
    }

    updateUserProfile(profileId: string, firstName: string, lastName: string, userName: string, userPass: string, userEmail: string) {
        this.http.put("http://localhost:8000/profiles/" +
            profileId, { firstName, lastName, userName, userPass, userEmail })
            .subscribe(() => {
                console.log('Updated: ' + profileId);
            });
    }

    getUser(profileId: string) {
        return this.http.get('http://localhost:8000/profiles/' + profileId);
    }
}
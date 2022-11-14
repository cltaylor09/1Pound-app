import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NutritionService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data 
    getNutritionn() {
        return this.http.get('http://localhost:8000/nutritionn');
    }

    //Uses http.post() to post data 
    addNutritionn( date: string,  meal: string, food: string, calories: string) {
    this.http.post('http://localhost:8000/nutritionn',{ date, meal, food, calories })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 

       
    }

    updateNutrition(nutritionId: string, date: string,  meal: string, food: string, calories: string) {
        //request path http://localhost:8000/nutritionn/5xbd456xx 
      
        this.http.put("http://localhost:8000/nutritionn/" + 
        nutritionId,{ date, meal, food, calories })
        .subscribe(() => {
            console.log('Updated: ' + nutritionId);
        });
    }

    deleteNutrition(nutritionId: string) {
        this.http.delete("http://localhost:8000/nutritionn/" + nutritionId)
            .subscribe(() => {
                console.log('Deleted: ' + nutritionId);
            });
        
        location.reload(); 
    }

    //Uses http.get() to request data based on nutrition id 
    getNutrition(nutritionId: string) {
        return this.http.get('http://localhost:8000/nutritionn/'+ nutritionId);
}
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ListCalendarsComponent } from './list-calendars/list-calendars.component';
import { NewCalendarFormComponent } from './new-calendar-form/new-calendar-form.component';
import { CalendarService } from './calendar.service';

import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { NewWorkoutFormComponent } from './new-workout-form/new-workout-form.component';
import { ListWorkoutsComponent } from './list-workouts/list-workouts.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkoutService } from './workout.service';

import { NewNutritionFormComponent } from './new-nutrition-form/new-nutrition-form.component';
import { ListNutritionnComponent } from './list-nutritionn/list-nutritionn.component';
//import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NutritionService } from './nutrition.service';

const appRoutes: Routes = [{
  path: '',  //default component to display
  component: HomePageComponent
}, {
  path: 'addProfile',  //when students added 
  component: ProfileFormComponent
}, {
  path: 'editProfile/:_id', //when students edited 
  component: ProfileFormComponent
}, {
  path: 'listProfiles',  //when students listed
  component: ProfileListComponent
}, {
  path: 'home',
  component: HomePageComponent
}, {
  path: 'profile',
  component: ProfileListComponent
}, {
  path: 'addWorkout',  //when students added
  component: NewWorkoutFormComponent
}, {
  path: 'editWorkout/:_id', //when students edited
  component: NewWorkoutFormComponent
}, {
  path: 'listWorkouts',  //when students listed
  component: ListWorkoutsComponent
}, {
  path: 'addCalendar',  //when students added 
  component: NewCalendarFormComponent
}, {
  path: 'listCalendars',  //when students listed
  component: ListCalendarsComponent
}, {
  path: 'editCalendar/:_id', //when students edited 
  component: NewCalendarFormComponent
}, {
  path: 'addNutrition',  //when nutritionn added 
  component: NewNutritionFormComponent
}, {
  path: 'editNutrition/:_id', //when nutritionn edited 
  component: NewNutritionFormComponent
}, {
  path: 'listNutritionn',  //when nutritionn listed
  component: ListNutritionnComponent
}, {
  path: '**',  //when path cannot be found
  component: NotFoundComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileFormComponent,
    ProfileMenuComponent,
    NotFoundComponent,
    ProfileListComponent,
    NewCalendarFormComponent,
    ListCalendarsComponent,
    ListWorkoutsComponent,
    NewWorkoutFormComponent,
    NewNutritionFormComponent,
    ListNutritionnComponent,
    //NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProfileService, CalendarService, WorkoutService, NutritionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

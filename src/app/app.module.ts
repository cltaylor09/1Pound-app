import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarEditorComponent } from './calendar-editor/calendar-editor.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NutritionComponent } from './nutrition/nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileComponent,
    CalendarEditorComponent,
    WorkoutsComponent,
    NutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

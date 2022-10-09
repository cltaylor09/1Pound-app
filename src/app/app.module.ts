import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileComponent } from './profile/profile.component';
import { CalendarEditorComponent } from './calendar-editor/calendar-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalendarEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

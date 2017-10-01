import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import  { LessonModule } from './lesson/lesson.module';
import { AwardsComponent } from './awards/awards.component';

import { ScoreTrackingService } from './services/score-tracking.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    LessonModule,
    AppRoutingModule
  ],
  providers: [ScoreTrackingService],
  bootstrap: [AppComponent]
})

export class AppModule { }

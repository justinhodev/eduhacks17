import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { ScienceComponent } from './science/science.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClassesComponent,
    SolarSystemComponent,
    ScienceComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

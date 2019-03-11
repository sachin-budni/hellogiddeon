import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ForceChartComponent } from './force-chart/force-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ForceChartComponent
  ],
  imports: [
    BrowserModule,DemoMaterialModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

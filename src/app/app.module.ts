import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ForceChartComponent } from './force-chart/force-chart.component';
import { GoogleTrendComponent } from './google-trend/google-trend.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const route:Routes = [
  {path:'',component:HomeComponent},
  {path:'google',component:GoogleTrendComponent},
  {path:'force',component:ForceChartComponent},
  {path:'bar',component:BarChartComponent},
  {path:'login',component:LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ForceChartComponent,
    GoogleTrendComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,DemoMaterialModule,BrowserAnimationsModule,RouterModule.forRoot(route),FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

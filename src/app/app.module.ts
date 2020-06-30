import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StationsComponent } from './stations/stations.component';
import { StationComponent } from './station/station.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportComponent } from './report/report.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    StationsComponent,
    StationComponent,
    ReportsComponent,
    ReportComponent,
    ChartsModule
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

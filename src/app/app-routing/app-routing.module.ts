import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { StationsComponent } from '../stations/stations.component';
import { ReportsComponent } from '../reports/reports.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'navbar',
    component: NavComponent,
  }, 
  {
    path: 'stations',
    component: StationsComponent,
  },
  {
    path: 'options',
    component: NavComponent,
  },
  {
    path: 'stations',
    component: NavComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
   {
    path: 'logs',
    component: NavComponent,
  },
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class AppRoutingModule { }

/* This file defines the routes for the Angular application, mapping URL paths to their 
corresponding components. It includes a default route that redirects to '/courses', 
and two routes for displaying courses and the schedule.*/

import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses';
import { ScheduleComponent } from './pages/schedule/schedule';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'schedule', component: ScheduleComponent },
];

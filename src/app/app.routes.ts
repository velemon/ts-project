import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses';
import { ScheduleComponent } from './pages/schedule/schedule';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'schedule', component: ScheduleComponent },
];

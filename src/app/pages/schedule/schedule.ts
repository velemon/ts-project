/* This component displays the user's schedule, allowing them to view the courses they have 
added and remove them if needed. It also calculates the total points for the scheduled courses.*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../services/scheduleService';
import { Course } from '../../services/courseModel';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css'],
})

/* Defines the ScheduleComponent, which manages the user's schedule. 
It uses the ScheduleService to retrieve the current schedule and provides methods to remove 
courses and calculate total points.*/
export class ScheduleComponent {
  schedule: Course[] = [];

  // Initializes the component by retrieving the current schedule from the ScheduleService.
  constructor(private scheduleService: ScheduleService) {
    this.schedule = this.scheduleService.getSchedule();
  }

  /* Removes a course from the schedule by calling the removeCourse method of the ScheduleService 
 and then updates the local schedule variable to reflect the changes.*/
  removeCourse(course: Course) {
    this.scheduleService.removeCourse(course);
    this.schedule = this.scheduleService.getSchedule();
  }

  // Calculates the total points for the courses in the schedule by summing up the points of each course.
  totalPoints(): number {
    return this.schedule.reduce((sum, c) => sum + c.points, 0);
  }
}
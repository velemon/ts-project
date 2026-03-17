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
export class ScheduleComponent {
  schedule: Course[] = [];

  constructor(private scheduleService: ScheduleService) {
    this.schedule = this.scheduleService.getSchedule();
  }

  removeCourse(course: Course) {
    this.scheduleService.removeCourse(course);
    this.schedule = this.scheduleService.getSchedule();
  }

  totalPoints(): number {
    return this.schedule.reduce((sum, c) => sum + c.points, 0);
  }
}

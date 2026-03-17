import { Injectable } from '@angular/core';
import { Course } from './courseModel';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private storageKey = 'mySchedule';

  getSchedule(): Course[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addCourse(course: Course) {
    const schedule = this.getSchedule();
    if (!schedule.find(c => c.courseCode === course.courseCode)) {
      schedule.push(course);
      localStorage.setItem(this.storageKey, JSON.stringify(schedule));
    }
  }

  removeCourse(course: Course) {
    let schedule = this.getSchedule();
    schedule = schedule.filter(c => c.courseCode !== course.courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(schedule));
  }
}
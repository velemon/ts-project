// This service manages the user's schedule, allowing them to add and remove courses. It uses localStorage to persist the schedule across sessions.

import { Injectable } from '@angular/core';
import { Course } from './courseModel';

/* Provides methods to get the current schedule, add a course, and remove a course. 
It uses localStorage to save the schedule data, ensuring that it persists even when the 
user refreshes the page or closes the browser. */
@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private storageKey = 'mySchedule';

  // Retrieves the current schedule from localStorage. If no schedule is found, it returns an empty array.
  getSchedule(): Course[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  /* Adds a course to the schedule if it is not already present. It checks for duplicates based on 
  he course code. If the course is added, it updates the localStorage with the new schedule. */
  addCourse(course: Course) {
    const schedule = this.getSchedule();
    if (!schedule.find(c => c.courseCode === course.courseCode)) {
      schedule.push(course);
      localStorage.setItem(this.storageKey, JSON.stringify(schedule));
    }
  }

  /* Removes a course from the schedule based on its course code. It filters out the specified 
  course and updates the localStorage with the new schedule. */
  removeCourse(course: Course) {
    let schedule = this.getSchedule();
    schedule = schedule.filter(c => c.courseCode !== course.courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(schedule));
  }
}
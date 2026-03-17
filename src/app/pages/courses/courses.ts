import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../services/courseService';
import { ScheduleService } from '../../services/scheduleService';
import { Course } from '../../services/courseModel';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private scheduleService: ScheduleService
  ) {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  searchCourses() {
    this.filteredCourses = this.courses.filter(c =>
      c.courseName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToSchedule(course: Course) {
    this.scheduleService.addCourse(course);
  }
}
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
  selectedSubject: string = '';
  subjects: string[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    private courseService: CourseService,
    private scheduleService: ScheduleService
  ) {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = data;

      this.subjects = [...new Set(data.map(c => c.subject))];
    });
  }

  searchCourses() {
    this.filteredCourses = this.courses.filter(c =>
      (
        c.courseName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.courseCode.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.subject.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.syllabus.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) &&
      (
        this.selectedSubject === '' ||
        c.subject === this.selectedSubject
      )
    );

    this.currentPage = 1;
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredCourses.sort((a: any, b: any) => {
      let valueA = a[column];
      let valueB = b[column];

      if (typeof valueA === 'string') valueA = valueA.toLowerCase();
      if (typeof valueB === 'string') valueB = valueB.toLowerCase();

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  get paginatedCourses(): Course[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCourses.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  addToSchedule(course: Course) {
    this.scheduleService.addCourse(course);
  }
}
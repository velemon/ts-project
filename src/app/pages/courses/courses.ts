import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../services/courseService';
import { ScheduleService } from '../../services/scheduleService';
import { Course } from '../../services/courseModel';

/* This component is responsible for displaying the list of courses, allowing users to search, 
filter, sort, and paginate through the courses. It also provides functionality to add courses 
to the user's schedule. The component uses services to fetch course data and manage the 
user's schedule. */
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
}) 

// Defines the metadata for the CoursesComponent, including its selector.
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

  // Injects the CourseService and ScheduleService to fetch course data and manage the schedule.
  constructor(
    private courseService: CourseService,
    private scheduleService: ScheduleService
  ) {
    // Fetch courses from the CourseService and initialize the courses.
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = data;

      // Extract unique subjects from the courses to populate the subject filter dropdown.
      this.subjects = [...new Set(data.map(c => c.subject))];
    });
  }

  // Filters the courses based on the search term and selected subject, and resets the current page to 1.
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

  // Sorts the filtered courses based on the specified column and toggles the sort direction between ascending and descending.
  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    // Sort the filtered courses based on the selected column and sort direction.
    this.filteredCourses.sort((a: any, b: any) => {
      let valueA = a[column];
      let valueB = b[column];

      // Handle case-insensitive sorting for string values.
      if (typeof valueA === 'string') valueA = valueA.toLowerCase();
      if (typeof valueB === 'string') valueB = valueB.toLowerCase();

      // Compare the values and return the appropriate sort order based on the sort direction.
      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Calculates the subset of filtered courses to display based on the current page and items per page.
  get paginatedCourses(): Course[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCourses.slice(start, start + this.itemsPerPage);
  }

  // Calculates the total number of pages based on the length of the filtered courses and items per page.
  get totalPages(): number {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }

  // Navigates to the next page of courses if the current page is less than the total number of pages.
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Navigates to the previous page of courses if the current page is greater than 1.
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // The addToSchedule method adds the specified course to the user's schedule using the ScheduleService.
  addToSchedule(course: Course) {
    this.scheduleService.addCourse(course);
  }
}
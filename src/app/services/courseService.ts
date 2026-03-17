import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './courseModel';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/miun_courses.json');;
  }
}
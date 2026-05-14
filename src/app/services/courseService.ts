/* This file defines the CourseService, which is responsible for fetching 
course data from a JSON file. It uses Angular's HttpClient to make HTTP requests and 
returns an Observable of an array of Course objects.*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './courseModel';

/* This service has @Injectable, which allows it to be injected into other components or 
services in the Angular application. The providedIn: 'root' option makes it a singleton 
service that is available throughout the application. */
@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/miun_courses.json');;
  }
}
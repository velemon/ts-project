/* This file defines the Course interface, which represents the structure of a course object 
in the application. It includes properties such as courseCode, subject, courseName, points, and syllabus.*/

export interface Course {
  courseCode: string;
  subject: string;
  courseName: string;
  points: number;
  syllabus: string;
}
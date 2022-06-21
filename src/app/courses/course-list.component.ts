import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];
  _filteredCourses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this._courses = courses;
        this._filteredCourses = this._courses;
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this._filteredCourses = this._courses.filter(
      (course) =>
        course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}

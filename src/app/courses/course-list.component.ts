import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService ) {
    this.courses = this.courseService.getCourses();
  }

  ngOnInit(): void {
  }
}

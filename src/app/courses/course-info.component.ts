import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseService
      .getById(Number(this.activateRoute.snapshot.paramMap.get('id')))
      .subscribe({
        next: (course) => (this.course = course),
        error: (err) => console.log('Error', err),
      });
  }

  save() {
    this.courseService.save(this.course).subscribe({
      next: (course) => console.log('Saved with sucess.'),
      error: (err) => console.log('Error', err),
    });
  }
}

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Lesson {
  constructor(public id: number, public name: string) { }
}

const LESSONS = [
  new Lesson(1, 'Sun'),
  new Lesson(2, 'Mercury'),
  new Lesson(3, 'Venus'),
  new Lesson(4, 'Earth'),
  new Lesson(5, 'Mars'),
  new Lesson(6, 'Jupiter'),
  new Lesson(7, 'Saturn'),
  new Lesson(8, 'Uranus'),
  new Lesson(9, 'Neptune')
];

@Injectable()
export class LessonService {
  getLessons() { return Observable.of(LESSONS); }

  getLesson(id: number | string) {
    return this.getLessons()
      // (+) before `id` turns the string into a number
      .map(lessons => lessons.find(lesson => lesson.id === +id));
  }
}
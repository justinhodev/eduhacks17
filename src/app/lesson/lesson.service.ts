import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Lesson {
  constructor(public id: number, public name: string, public description: string, public quiz: string[]) { }
}

const LESSONS = [
  new Lesson(1, 
    'Sun', 
    'The sun is v hot',
    [
      'How hot is the surface of the sun?',
      'How many Earths can fit inside the sun'
    ]),
  new Lesson(2, 
    'Mercury', 
    'Mercury is light metal',
    [
      ''
    ]),
  new Lesson(3, 
    'Venus', 
    'The Roman Goddess of love',
    [
      ''
    ]),
  new Lesson(4, 
    'Earth', 
    'We live here',
    [
      ''
    ]),
  new Lesson(5, 
    'Mars', 
    'We don\'t live here but we want to travel here for some reason',
    [
      ''
    ]),
  new Lesson(6, 
    'Jupiter', 
    '',
    [
      ''
    ]),
  new Lesson(7, 
    'Saturn', 
    '',
    [
      ''
    ]),
  new Lesson(8, 
    'Uranus', 
    'Your behind',
    [
      ''
    ]),
  new Lesson(9, 
    'Neptune', 
    'The Roman God of the sea',
    [
      ''
    ])
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
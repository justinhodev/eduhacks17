import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Lesson {
  constructor(public id: number, public name: string, public description: string, public quiz: Question[]) { }
}

class Question {
  constructor(public id: number, public question: string, public answer: boolean) { }
}

const LESSONS = [
  new Lesson(
    1, 
    'Sun', 
    'The sun is v hot',
    [
      new Question(
        1,
        'Is the Sun a planet?',
        false),
      new Question(
        2,
        'Is Earth hotter than the Sun?',
        false)
    ]),
  new Lesson(2, 
    'Mercury', 
    'Mercury is light metal',
    [
      new Question(
        1,
        'Is Mercury hotter than the Sun?',
        false),
      new Question(
        2,
        'Is Mercury bigger than Earth?',
        false)
    ]),
  new Lesson(3, 
    'Venus', 
    'The Roman Goddess of love',
    [
      new Question(
        1,
        'Is Venus hotter than the Sun?',
        false)
    ]),
  new Lesson(4, 
    'Earth', 
    'We live here',
    [
      new Question(
        1,
        'Is Earth hotter than the Sun?',
        false)
    ]),
  new Lesson(5, 
    'Mars', 
    'We don\'t live here but we want to travel here for some reason',
    [
      new Question(
        1,
        'Is Mars hotter than the Sun?',
        false)
    ]),
  new Lesson(6, 
    'Jupiter', 
    '',
    [
      new Question(
        1,
        'Is Jupiter hotter than the Sun?',
        false)
    ]),
  new Lesson(7, 
    'Saturn', 
    '',
    [
      new Question(
        1,
        'Is Mercury hotter than the Sun?',
        false)
    ]),
  new Lesson(8, 
    'Uranus', 
    'Your behind',
    [
      new Question(
        1,
        'Is Uranus hotter than the Sun?',
        false)
    ]),
  new Lesson(9, 
    'Neptune', 
    'The Roman God of the sea',
    [
      new Question(
        1,
        'Is Neptune hotter than the Sun?',
        false)
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
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Lesson, LessonService }  from './lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  
    private selectedId: number;
  
    constructor(
      private service: LessonService,
      private route: ActivatedRoute
    ) {}
  
    ngOnInit() {
      this.lessons$ = this.route.paramMap
        .switchMap((params: ParamMap) => {
          // (+) before `params.get()` turns the string into a number
          this.selectedId = +params.get('id');
          return this.service.getLessons();
        });
    }

}

import { Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  student:any={
    firstName: 'Jane',
    lastName: 'Doe',
    homeroom: 8,
    studentNum: 298493,
    level: 12,
    flair: 'Astronaut'
  };

  classesArray:any[] = [
    {
      name: 'Science',
      percent: 25
    },
    {
      name: 'English',
      percent: 60
    },
    {
      name: 'Math',
      percent: 40
    },
    {
      name: 'Socials',
      percent: 80
    }
  ];

  getProgWidth(selectedClassName){
    for(let i in this.classesArray){
      if(this.classesArray[i].name === selectedClassName){
        return this.classesArray[i].percent;
      }
    }
  }



}

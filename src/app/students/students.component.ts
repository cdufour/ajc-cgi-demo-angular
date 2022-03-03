import { Component } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor() {
    setInterval(function() {
      console.log('ok')
    }, 5000)
  }

  //students = ['Nassim', 'Yannick', 'Louise'];
  students = [
    { name: 'Nassim', grade: 10},
    { name: 'Yannick', grade: 2},
    { name: 'Louise', grade: 18.5}
  ];
}

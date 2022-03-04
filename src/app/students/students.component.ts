import { Component } from '@angular/core';

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  //students = ['Nassim', 'Yannick', 'Louise'];
  students: Student[] = [
    { name: 'Nassim', grade: 10},
    { name: 'Yannick', grade: 2},
    { name: 'Louise', grade: 18.5}
  ];
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student.interface';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [
    { name: 'Nassim', grade: 10},
    { name: 'Yannick', grade: 2},
    { name: 'Louise', grade: 18.5},
    { name: 'Ali', grade: 9.5}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

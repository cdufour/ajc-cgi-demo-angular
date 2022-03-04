import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../interfaces/student.interface';

@Component({
  selector: 'student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() student: Student | null = null;

  constructor() { }

  ngOnInit(): void {
  
  }

}

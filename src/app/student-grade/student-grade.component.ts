import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent implements OnInit {
  @Input() grade: number = 0;
  sanctionStyle = 'bold';

  // style1 = {
  //   'font-weight': 'bold',
  //   'font-style': 'italic'
  // };

  constructor() {
    // la valeur le propriété css liée à la propriété sanctionStyle
    // sera automatiquement modifiée dans 5 secondes
    // => rerendu dans le DOM
    setTimeout(() => {
      this.sanctionStyle = 'normal';
    }, 5000)
  }

  ngOnInit(): void {
  }

}

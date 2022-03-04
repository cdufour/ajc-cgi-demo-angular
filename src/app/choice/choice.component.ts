import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  selectedOption = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    const option = event.target.value;
    this.selectedOption = option;
  }

}

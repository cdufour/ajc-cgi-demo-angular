import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wordcount',
  templateUrl: './wordcount.component.html',
  styleUrls: ['./wordcount.component.css']
})
export class WordcountComponent implements OnInit {
  @Input() inputText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

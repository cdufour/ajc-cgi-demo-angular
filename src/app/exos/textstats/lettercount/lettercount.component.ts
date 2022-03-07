import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lettercount',
  templateUrl: './lettercount.component.html',
  styleUrls: ['./lettercount.component.css']
})
export class LettercountComponent implements OnInit {
  @Input() inputText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

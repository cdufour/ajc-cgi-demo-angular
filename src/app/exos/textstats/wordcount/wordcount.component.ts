import { Component, Input } from '@angular/core';

@Component({
  selector: 'wordcount',
  templateUrl: './wordcount.component.html',
  styleUrls: ['./wordcount.component.css']
})
export class WordcountComponent {
  @Input() inputText: string = '';
}

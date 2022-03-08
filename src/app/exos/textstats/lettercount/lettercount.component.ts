import { Component, Input } from '@angular/core';

@Component({
  selector: 'lettercount',
  templateUrl: './lettercount.component.html',
  styleUrls: ['./lettercount.component.css']
})
export class LettercountComponent {
  @Input() inputText: string = '';
}

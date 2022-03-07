import { Component } from '@angular/core';

@Component({
  selector: 'textstats',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  inputText: string = '';

  onKeyup(event: any) {
    this.inputText = event.target.value;
  }

}

import { Component } from '@angular/core'

@Component({
  selector: 'counter',
  template: `
    <p>Simple compteur</p>
    <button (click)="increment()">
      {{ btnText }}
    </button>
    <button (click)="decrement()">Decrement</button>
    <span>{{ counter }}</span>
  `
})
export class CounterComponent { 
  btnText = 'Increment';
  counter = 0;

  increment() {
    this.counter += 1;
    this.updateBtnText();
  }

  decrement() {
    this.counter -= 1;
    this.updateBtnText();
  }

  private updateBtnText() {
    if (this.counter == 10) {
      this.btnText = "Basta !";
    } else {
      this.btnText = "Increment !";
    }
  }

}


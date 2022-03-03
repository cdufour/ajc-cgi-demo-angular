import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriétés
  title = 'Formation Angular';
  total = 23 + 2;

  // Méthodes
  demo() {
    return "simple démo";
  }
}

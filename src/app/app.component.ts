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
  imageInfo = {
    alt: 'Loup bienveillant',
    src: 'assets/images/loup.jpg'
  };

  // Méthodes
  constructor() {
    setTimeout(() => {
      this.imageInfo = {
        src: 'https://us.123rf.com/450wm/stanzi11/stanzi112005/stanzi11200500050/146906519-lion-rugissant-isol%C3%A9-sur-fond-noir.jpg',
        alt: 'Lion rugissant'
      }
  
    }, 5000)
  }

  demo() {
    return "simple démo";
  }
}

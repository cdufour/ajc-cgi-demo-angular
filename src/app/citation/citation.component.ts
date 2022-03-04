import { Component } from '@angular/core';

interface Citation {
  text: string;
  author: string;
}

@Component({
  selector: 'citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.css']
})
export class CitationComponent {

  constructor() {
    setInterval(() => {
      this.selectedCitation = this.citations[this.randInt(this.citations.length)];
    }, 4000)
  }

  // propriétés
  citations: Citation[] = [
    { text: "La femme est l'avenir de l'homme", author: "Aragon"},
    { text: "The world is yours", author: "Toni Montana" },
    { text: "Ad astra per aspera", author: "Inconnu" },
    { text: "C est sublime", author: "Torvalds Linus" },
    { text: "Tra il dire e il mare c'è di mezzo il mare", author: "Moravia" }
  ];

  selectedCitation: Citation = this.citations[0];

  // méthodes
  randInt(max: number){
    return Math.floor(Math.random() * max);
  }

}

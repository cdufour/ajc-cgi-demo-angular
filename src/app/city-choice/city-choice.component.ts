import { Component, OnInit } from '@angular/core';
import { City } from '../interfaces/city.interface';

@Component({
  selector: 'city-choice',
  templateUrl: './city-choice.component.html',
  styleUrls: ['./city-choice.component.css']
})
export class CityChoiceComponent implements OnInit {
  cities: City[] = [
    {image: "turin.jpg", name: "Turin", country: "Italie"},
    {image: "rio.jpg", name: "Rio", country: "Brésil"},
    {image: "paris.jpg", name: "Paris", country: "France"},
  ];

  selectedCity: City = this.cities[0];

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {

  }

}

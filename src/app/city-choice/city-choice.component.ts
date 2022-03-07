import { Component } from '@angular/core';
import { City } from '../interfaces/city.interface';

@Component({
  selector: 'city-choice',
  templateUrl: './city-choice.component.html',
  styleUrls: ['./city-choice.component.css']
})
export class CityChoiceComponent {
  cities: City[] = [
    {image: "turin.jpg", name: "Turin", country: "Italie"},
    {image: "rio.jpg", name: "Rio", country: "Brésil"},
    {image: "paris.jpg", name: "Paris", country: "France"},
  ];

  selectedCity: City | null = null;

  handleChange(event: any) {
    const cityName = event.target.value;
    const filteredCities = 
      this.cities.filter(city => city.name === cityName);
    
    this.selectedCity = (filteredCities.length > 0) 
      ? filteredCities[0] : null;
  }

}

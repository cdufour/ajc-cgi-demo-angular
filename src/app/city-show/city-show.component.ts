import { Component, OnInit, Input } from '@angular/core';
import { City } from '../interfaces/city.interface';

@Component({
  selector: 'city-show',
  templateUrl: './city-show.component.html',
  styleUrls: ['./city-show.component.css']
})
export class CityShowComponent implements OnInit {
  @Input() city: City | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  urlParam: string | null = '';

  constructor(private route: ActivatedRoute) {
    console.log('constructor')
  }

  // lifecycle method
  ngOnInit(): void {
    console.log('ngOnInit');
    this.urlParam = this.route.snapshot.paramMap.get('arg');
  }

}

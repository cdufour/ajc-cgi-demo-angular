import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-token',
  templateUrl: './demo-token.component.html',
  styleUrls: ['./demo-token.component.css']
})
export class DemoTokenComponent implements OnInit {
  clientToken: string | null = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.http
      .post('http://localhost:3000/login', null, { observe: 'response'  })
      .subscribe(res => {
        console.log(res.headers.get('X-Token'));
        if (res.headers.get('X-Token') !== null) {
          this.clientToken = res.headers.get('X-Token');
        }
      })
  }

  handleClick2() {
    const headers = new HttpHeaders()
      .set('X-Token', this.clientToken ? this.clientToken : '');

    console.log('Send GET request with token', this.clientToken);

    this.http
      .get('http://localhost:3000/private', { headers })
      .subscribe(res => {
        console.log(res)
      })
  }

}

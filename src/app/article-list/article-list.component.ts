import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: string[] = ["article 1", "article 2", "article 3"];
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleCustomEvent(event: string) {
    //console.log("Papa a reçu le message")
    this.message = event;
  }

}

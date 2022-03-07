import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent  {
  @Input() article: string = "";
  @Output() customEvent: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.customEvent.emit("Click sur " + this.article); // event + data event
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = ["todo 1", "todo 2", "todo 3"];

  constructor() { }

  getTodos() {
    return this.todos;
  }
}

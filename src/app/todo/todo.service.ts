import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = ["todo 1", "todo 2", "todo 3"];

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.todos;
  }

  getTodosAsync(): Observable<Todo[]> {
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }


}

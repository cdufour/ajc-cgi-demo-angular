import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';

// API public de démonstration
const API: string = "https://jsonplaceholder.typicode.com/todos";

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
    return this.http.get<Todo[]>(API);
  }

  postTodo(todo: Todo): Observable<HttpResponse<Todo>> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Token', 'azerty_1234');

    // ToDo: vérifier, côté serveur, que le token est bien présent 
    // dans la requête
  
    return this.http.post<Todo>(API, todo, { headers, observe: 'response' });
  }


}

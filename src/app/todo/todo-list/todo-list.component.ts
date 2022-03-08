//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'todos',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) {
    //this.todos = this.todoService.getTodos();
    //const res = this.http.get("https://jsonplaceholder.typicode.com/todos");
    //res.subscribe(data => console.log(data))
    const source$ = this.todoService.getTodosAsync();
    
    // source$.subscribe((todos: Todo[]) => {
    //   this.todos = todos;
    // })

    source$
      .pipe(
        //map((todos: Todo[]) => this.firstN(todos, 3))
        switchMap(todos => todos),
        //map(todo => todo.title),
        filter(todo => todo.title.length < 15)
      )
      .subscribe(todo => {
        this.todos.push(todo);
      })
  }

  ngOnInit(): void {
  }

  private firstN(a: Todo[], n: number) {
    return a.splice(0,n);
  }

}

//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';

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
    const source = this.todoService.getTodosAsync();
    source.subscribe((todos: Todo[]) => {
      this.todos = todos;
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todos',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];
  
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {
  }

}

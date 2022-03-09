import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = {
    title: "",
    userId: 0,
    completed: false
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log("Submit Form...");

    this.todoService
      .postTodo(this.todo)
      .subscribe((res: HttpResponse<Todo>) => {
        console.log(res.status);
        console.log(res.headers.get('X-Token'))
      })
  }

}

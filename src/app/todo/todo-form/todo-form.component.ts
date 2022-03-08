import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = {
    title: "",
    userId: 0,
    id: 0,
    completed: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

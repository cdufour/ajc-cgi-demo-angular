import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor() {

    setTimeout(
      () => {
        // utilisation de l'API native fetch/then
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json())
          .then(todos => {
            this.todos = todos.splice(10, 5);
          })
      },
      2000
    )


  
  }

  ngOnInit(): void {
  }

}

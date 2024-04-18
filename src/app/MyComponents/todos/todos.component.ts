import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemComponent]
})
export class TodosComponent implements OnInit{
  todos: Todo[] = [];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "This is title1",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title2",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is title3",
        desc: "Description",
        active: true
      }
    ]
  }
  ngOnInit(): void{

  }
}

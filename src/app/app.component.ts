import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodosComponent]
})
export class AppComponent {
  title = 'todolist';
  constructor(){
    setTimeout(() => {
      this.title = "Changed title"
    }, 2000);
  }
}

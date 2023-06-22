import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todos.service';

@Component({
  selector: 'acquisition-data',
  templateUrl: './acquisition-data.component.html',
  styleUrls: ['./acquisition-data.component.scss']
})

export class AcquisitionDataComponent implements OnInit {
  
  url: string = 'https://jsonplaceholder.typicode.com/todos'; 
  urlParams: string = '?_limit=3' 

  todos: Todo[] = [];
  todoTitle: string = '';

  loading: boolean = false;
  error: string = '';


  constructor(private todoService: TodoService) {}


  ngOnInit() {
    this.fetchTodos();
  }  

  addTodo() {
    if (!this.todoTitle.trim) {
      return
    };    

    this.todoService.addTodo(
      {
        completed: false,
        title: this.todoTitle
      }, 
      this.url
    ).subscribe( todo => {      
      this.todos.push(todo);
      this.todoTitle = '';
    })    
  }  

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos(this.url, this.urlParams)
      .subscribe(         
        {
          next: (tds) => {                 
            this.todos = tds;
            this.loading = false
          }, 
          error: (error) => {
            console.log(error.message);
            this.error = error.message;
          }      
        }        
      );
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id, this.url)
      .subscribe(() => {
        this.todos = this.todos.filter(
          t => t.id !== id
        )
      });
  }

  completeTodo(id: number,) {
    this.todoService.completeTodo(id, this.url)
      .subscribe(todo => {        
        this.todos.find( t => t.id === todo.id)!.completed = true;
      })
  }

}

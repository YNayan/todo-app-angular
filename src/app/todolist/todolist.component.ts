import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Todo } from '../Model/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList: Todo[] = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getTodos();

    this.api.isChanged.subscribe(
      isdeleted => {
        this.getTodos();
      }
    )
  }

  getTodos() {
    this.api.getTodos().subscribe(
      (todoList: Todo[]) => {
        this.todoList = todoList;
      }
    );
  }


}

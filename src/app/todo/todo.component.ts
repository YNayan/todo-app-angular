import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../Model/todo.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  detail!: Todo;

  constructor(private api: ApiService){}

  ngOnInit(): void {
      console.log(this.detail);
  }

  onDeleteTodo(){
    this.api.deleteTodos(this.detail._id.$oid).subscribe(
      res =>{
        this.api.isChanged.next(true);
      }
    )
  }

}

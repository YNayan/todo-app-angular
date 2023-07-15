import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-edit-todos',
  templateUrl: './add-edit-todos.component.html',
  styleUrls: ['./add-edit-todos.component.scss']
})
export class AddEditTodosComponent {

  statusList = ['To-do','In-Progress','Done']

  todoForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEditTodosComponent>, private formBuilder: FormBuilder, private api: ApiService){
    this.todoForm = this.formBuilder.group({
      title:"",
      description:"",
      status:""
    })
  }

  onCloseDialog(){
    this.dialogRef.close()
  }

  onSubmit(){
    if(this.todoForm.valid){
      console.log(this.todoForm.value);
      this.api.addTodos(this.todoForm.value).subscribe(
        res => {
          console.log(" it  is submitted");
          
        }
      );

    }
    
  }

}

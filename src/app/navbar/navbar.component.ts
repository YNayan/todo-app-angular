import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTodosComponent } from './add-edit-todos/add-edit-todos.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditTodosComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        console.log(" dilaog has been closed");
        
      }
    )
  }

}

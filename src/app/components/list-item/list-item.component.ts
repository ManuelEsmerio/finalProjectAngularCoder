import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Students } from '../../interfaces/students';
import { StudentService } from '../../services/student.service';
import { StudentModalComponent } from '../student-modal/student-modal.component';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Output() updateEvent = new EventEmitter<Students>();
  @Input() student!:Students;
  @Input() index!:number;

  constructor(private studentService:StudentService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  openDialog(student: Students) {
    const dialogRef = this.dialog.open(StudentModalComponent, {
      data: student
    });
    dialogRef.afterClosed().subscribe(result => {
      this.openSnackBar();
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2500,
      horizontalPosition:'start',
      verticalPosition: 'bottom',
      data:{
        message: "Successfully modified student.",
        icon:"done"
      }
    });
  }

  onStudentDelete(id:string){
    this.studentService.deleteStudent(id);
  }

}

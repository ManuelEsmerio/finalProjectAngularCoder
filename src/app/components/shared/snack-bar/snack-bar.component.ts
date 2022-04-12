import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { StudentComponent } from '../../../pages/student/student.component';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  durationInSeconds = 5;
  message:string = "Test message";
  icon:string = "code";

  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) {
      this.message = data.message;
      this.icon = data.icon;
    }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.openFromComponent(StudentComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}

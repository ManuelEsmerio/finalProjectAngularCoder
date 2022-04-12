import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Students } from '../../interfaces/students';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() updateStudent!: Students;

  count: number = 696658;
  url: string;

  studentFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    address: new FormGroup({
      direction: new FormControl(''),
      ext: new FormControl(''),
      int: new FormControl(''),
      zipcode: new FormControl(''),
      municipality: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    })
  });

  constructor(private studentService: StudentService,
    private _snackBar: MatSnackBar) {
    this.url = `https://avatars.githubusercontent.com/u/${this.count}?s=64&v=4`;
  }

  ngOnInit(): void {
  }

  onReset() {
    this.studentFormGroup.reset();
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.studentFormGroup.valid) {
      this.studentFormGroup.controls['image'].setValue(this.url);
      this.studentService.addStudent(this.studentFormGroup.value);
      this.openSnackBar();
      formDirective.resetForm();
      this.onReset();
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2500,
      horizontalPosition:'start',
      verticalPosition: 'bottom',
      data:{
        message: "Successfully created student.",
        icon:"done"
      }
    });
  }

}

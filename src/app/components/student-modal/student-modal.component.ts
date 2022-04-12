import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { Students } from '../../interfaces/students';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {

  studentFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<StudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Students,
    private studentService: StudentService) {
    this.studentFormGroup = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, [Validators.required, Validators.maxLength(30)]),
      lastname: new FormControl(data.lastname, [Validators.required, Validators.maxLength(60)]),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
      phone: new FormControl(data.phone, [Validators.required]),
      occupation: new FormControl(data.occupation, [Validators.required]),
      birthday: new FormControl(data.birthday, [Validators.required]),
      image: new FormControl(data.image),
      address: new FormGroup({
        direction: new FormControl(data.address.direction),
        ext: new FormControl(data.address.ext),
        int: new FormControl(data.address.int),
        zipcode: new FormControl(data.address.zipcode),
        municipality: new FormControl(data.address.municipality),
        state: new FormControl(data.address.state),
        country: new FormControl(data.address.country),
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.studentFormGroup.valid) {
      this.studentService.updateStudent(this.studentFormGroup.value);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Students } from '../../interfaces/students';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() updateStudent!:Students;

  studentFormGroup = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.maxLength(30)]),
    lastname : new FormControl('', [Validators.required, Validators.maxLength(60)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required]),
    occupation : new FormControl('', [Validators.required]),
    birthday : new FormControl('', [Validators.required]),
    address : new FormGroup({
      direction : new FormControl(''),
      ext : new FormControl(''),
      int : new FormControl(''),
      zipcode : new FormControl(''),
      municipality : new FormControl(''),
      state : new FormControl(''),
      country : new FormControl(''),
    })
  });

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    console.log((this.updateStudent) ? 'valor' : 'undefined')
  }

  onReset(){
    this.studentFormGroup.reset();
  }

  onSubmit(){
    if(this.studentFormGroup.valid){
      console.log(this.studentFormGroup.value);
      this.studentService.addStudent(this.studentFormGroup.value);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Students } from '../../interfaces/students';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  panelOpenForm = false;
  panelOpenList = false;
  students:Students[] = [];
  updateStudent!: Students;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(student => {
      this.students = student;
    });
  }

  updateStudentEvent(student: Students){
    this.updateStudent = student;
  }

}

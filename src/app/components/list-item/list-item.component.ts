import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Students } from '../../interfaces/students';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Output() updateEvent = new EventEmitter<Students>();
  @Input() student!:Students;
  @Input() index!:number;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  // ? Call to getStudentById function of the student.service to get the student that will be updated
  onStudentUpdate(id:string){
    const student = this.studentService.getStudentById(id);
    // ? that student that will be updated has to travel for the following components:
    // * list.component
    // * student.component
    // * student-form.component

    // ? And in that component, it has to display into the studentFormGroup but I don't know if it's the most correct process yo do it
    this.updateEvent.emit(student);
  }

  onStudentDelete(id:string){
    this.studentService.deleteStudent(id);
  }

}

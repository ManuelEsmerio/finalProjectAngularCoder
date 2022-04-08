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

  onStudentUpdate(id:string){
    const student = this.studentService.getStudentById(id);
    this.updateEvent.emit(student);
  }

  onStudentDelete(id:string){
    this.studentService.deleteStudent(id);
  }

}

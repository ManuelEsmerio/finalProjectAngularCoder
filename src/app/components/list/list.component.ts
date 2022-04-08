import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Students } from '../../interfaces/students';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() updateEvent = new EventEmitter<Students>();
  @Input() students!:Students[];

  constructor() { }

  ngOnInit(): void {
  }

  receiveStudentUpdate(student: Students){
    console.log("Desde list");
    console.log(student);
    this.updateEvent.emit(student);
  }

}

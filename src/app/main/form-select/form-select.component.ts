import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../interfaces';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  @Input() items!:any[];
  @Input() label!:string;
  @Input() defaultSelected!:any;
  selector:any=""
  @Output() OutputEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeSelection(event:any):void{
    this.OutputEvent.emit(event);
  }

}

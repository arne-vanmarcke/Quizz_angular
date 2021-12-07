import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  question:Question={
    question:"Hallo question",
    answer:"A",
    choises:["A","B","C"]
  }

  constructor() { }

  checkQuestion(question:string):void{
    console.log(question)
  }

  ngOnInit(): void {
  }

}

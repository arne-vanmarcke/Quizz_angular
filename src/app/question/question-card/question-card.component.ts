import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainComponent } from 'src/app/main/main/main.component';
import { Http_Response, Question, QuestionReceived, QuestionButton } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  question:Question={
    question:"",
    answer:"",
    choises:[]
  }
  toggle:number[]=[0,0,0,0,0,0,0];

  @ViewChild(MainComponent)
  private main!:MainComponent
  selType!:string
  selCategory!:string
  selDifficulty!:string

  constructor(private questionService:QuestionService, private router: Router, private route: ActivatedRoute) {
    this.questionService.getQuestion().subscribe(question=>{
      console.log(question.results)
      this.createQuestion(question)
    })
  }

  checkQuestion(question:QuestionButton):void{
    if(question.value==this.question.answer){
      for(let i=0; i<this.question.choises.length; i++){
        if(i==question.id)
          this.toggle[question.id]=1
        else
          this.toggle[i]=0
      }
    }
    else{
      for(let i=0; i<this.question.choises.length; i++){
        if(i==question.id)
          this.toggle[question.id]=2
        else
          this.toggle[i]=0
      }
    }
    console.log("route")
  }

  createQuestion(question:Http_Response){
    var QuestionInf: QuestionReceived=question.results[0]
    this.question.answer=QuestionInf.correct_answer
    this.question.question=QuestionInf.question
    QuestionInf.incorrect_answers.push(QuestionInf.correct_answer)
    var array=this.shuffleArray(QuestionInf.incorrect_answers)
    for(var i= 0; i<array.length; i++){
      this.question.choises.push({id:i,value:array[i]})
    }

  }

  shuffleArray(arr:string[]){
    let currentIndex=arr.length, randomIndex=0, temp=""
    while(currentIndex!=0){
      randomIndex = Math.floor(Math.random() * currentIndex--);
      temp=arr[currentIndex]
      arr[currentIndex]=arr[randomIndex]
      arr[randomIndex]=temp
    }
    return arr
  }

  ngOnInit(): void {
    this.questionService.currentType.subscribe(
      type=>{
        this.selType=type
      }
    )
    this.questionService.currentCategory.subscribe(
      category=>{
        this.selCategory=category
      }
    )
    this.questionService.currentDifficulty.subscribe(
      difficulty=>{
        this.selDifficulty=difficulty
      }
    )
  }

}

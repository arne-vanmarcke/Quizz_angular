import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainComponent } from 'src/app/main/main/main.component';
import { Http_Response, Question, QuestionReceived, QuestionButton, HtmlParsed } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit, OnDestroy {
  question:Question={
    question:"",
    answer:"",
    choises:[],
    difficulty:""
  }

  toggle:number[]=[0,0,0,0,0,0,0];
  question_correct:boolean=false
  question_not_exist:boolean=false

  selType!:string
  selCategory!:string
  selDifficulty!:string

  constructor(private questionService:QuestionService, private router: Router, private route: ActivatedRoute) {
    this.questionService.getQuestion().subscribe(question=>{
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
      this.question_correct=true
      let points=1
      if(this.question.difficulty==="hard")
        points=60
      else if(this.question.difficulty==="medium")
        points=40
      else if(this.question.difficulty==="easy")
        points=20
      this.questionService.updateScore(points)
      setTimeout(()=>{
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['question']);
        });
      },500)
    }
    else{
      for(let i=0; i<this.question.choises.length; i++){
        if(i==question.id)
          this.toggle[question.id]=2
        else
          this.toggle[i]=0
      }
      this.question_correct=false
      setTimeout(()=>{
        this.router.navigate(['']);
      },500)
    }
  }

  createQuestion(question:Http_Response){
    var QuestionInf: QuestionReceived=question.results[0]
    if(QuestionInf==undefined){
      this.question_not_exist=true
      this.router.navigate(['']);
      return
    }
    this.question.difficulty=QuestionInf.difficulty
    this.question.answer=QuestionInf.correct_answer
    this.question.question=this.decodeHTMLEntities(QuestionInf.question)
    QuestionInf.incorrect_answers.push(QuestionInf.correct_answer)
    var array=this.shuffleArray(QuestionInf.incorrect_answers)
    for(var i= 0; i<array.length; i++){
      this.question.choises.push({id:i,value:this.decodeHTMLEntities(array[i])})
    }

  }
  parsed!:HtmlParsed
  decodeHTMLEntities(str:string){
    let parser= new DOMParser();
    let parsed=parser.parseFromString(str,'text/html')
    return parsed.body.innerHTML
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

  ngOnDestroy(): void {
    if(!this.question_correct&&!this.question_not_exist)
      this.questionService.wrongAnswer()
  }

}

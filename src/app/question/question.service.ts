import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question, Http_Response } from './question';
import { Observable } from 'rxjs';
import { HighscoreService } from '../highscore/highscore.service';
import { Highscore } from '../highscore/highscore';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private hs:Highscore={
    score:2,
  }

  private score = new BehaviorSubject<number>(0)
  currentScore= this.score.asObservable()

  private TypeSource = new BehaviorSubject<string>("default")
  currentType = this.TypeSource.asObservable()

  private DifficultySource = new BehaviorSubject<string>("default")
  currentDifficulty = this.DifficultySource.asObservable()

  private CategorySource = new BehaviorSubject<string>("default")
  currentCategory = this.CategorySource.asObservable()

  constructor(private http: HttpClient, private highscoreService:HighscoreService) {}

  changeType(type:string){
    this.TypeSource.next(type)
  }
  changeDifficulty(difficulty:string){
    this.DifficultySource.next(difficulty)
  }
  changeCategory(category:string){
    this.CategorySource.next(category)
  }
  updateScore(points:number=1){
    this.score.next(this.score.getValue()+points)
  }
  resetScore(points:number=0){
    this.score.next(points)
  }
  wrongAnswer(){
    this.hs.score=this.score.getValue()
    this.highscoreService.postHighscore(this.hs).subscribe(result=>{})
  }
  getQuestion(): Observable<Http_Response>{
    let url="https://opentdb.com/api.php?amount=1"
    var val;
    if((val=this.TypeSource.getValue())!="any")
      url+=`&type=${val}`
    if((val=this.DifficultySource.getValue())!="Any Difficulty")
      url+=`&difficulty=${val.toLowerCase()}`
    if((val=this.CategorySource.getValue().toString())!="1")
      url+=`&category=${val.toLowerCase()}`
    return this.http.get<Http_Response>(url)
  }
}

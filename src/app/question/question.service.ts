import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question, Http_Response } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private TypeSource = new BehaviorSubject<string>("default")
  currentType = this.TypeSource.asObservable()

  private DifficultySource = new BehaviorSubject<string>("default")
  currentDifficulty = this.DifficultySource.asObservable()

  private CategorySource = new BehaviorSubject<string>("default")
  currentCategory = this.CategorySource.asObservable()

  constructor(private http: HttpClient) { }

  changeType(type:string){
    this.TypeSource.next(type)
  }
  changeDifficulty(difficulty:string){
    this.DifficultySource.next(difficulty)
  }
  changeCategory(category:string){
    this.CategorySource.next(category)
  }

  getQuestion(): Observable<Http_Response>{
    return this.http.get<Http_Response>("https://opentdb.com/api.php?amount=1")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Highscore } from './highscore';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  constructor(private http: HttpClient) { }

  getHighscores(): Observable<Highscore[]>{
    return this.http.get<Highscore[]>("https://localhost:7055/api/Highscores")
  }

  newHeaders={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  postHighscore(highscore:Highscore):Observable<Highscore>{
    console.log(highscore)
    return this.http.post<Highscore>("https://localhost:7055/api/Highscores",{'id':highscore.id,'score':highscore.score},this.newHeaders)
  }
}

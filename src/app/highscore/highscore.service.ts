import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Highscore } from './highscore';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  port:number=7185

  constructor(private http: HttpClient) { }

  getHighscores(): Observable<Highscore[]>{
    return this.http.get<Highscore[]>("https://localhost:"+this.port+"/api/Highscore")
  }

  newHeaders={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  postHighscore(highscore:Highscore):Observable<Highscore>{
    return this.http.post<Highscore>("https://localhost:"+this.port+"/api/Highscore",{'id':highscore.id,'score':highscore.score},this.newHeaders)
  }
}

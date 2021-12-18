import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Difficulty, Type } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getTypes():Observable<Type[]>{
    return of([
      {
        text:"Any Type",
        value:"any"
      },
      {
        text:"Multiple choise",
        value:"multiple"
      },
      {
        text:"True / False",
        value:"boolean"
      }
    ])
  }
  getDifficulty():Observable<Difficulty[]>{
    return of([
      {
        text:"Any Difficulty",
        value:"Any Difficulty",
      },
      {
        text:"Easy",
        value:"Easy",
      },
      {
        text:"Medium",
        value:"Medium"
      },
      {
        text:"Hard",
        value:"Hard",
      }
    ])
  }
  getCategory():Observable<Category[]>{
    return of([
      {
        text:"Any Category",
        value:1
      },
      {
        text: "general knowledge",
        value:9
      },
      {
        text: "Entertainment: Books",
        value:10
      },
      {
        text: "Entertainment: Film",
        value:11
      },
      {
        text: "Entertainment: Music",
        value:12
      },
      {
        text: "Entertainment: Musicals & Theatres",
        value:13
      },
      {
        text: "Entertainment: Television",
        value:14
      },
      {
        text: "Entertainment: Video Games",
        value:15
      },
      {
        text: "Entertainment: Board Games",
        value:16
      },
      {
        text: "Science & Nature",
        value:17
      },
      {
        text: "Science: Computers",
        value:18
      },
      {
        text: "Science: Mathematics",
        value:19
      },
      {
        text: "Mythology",
        value:20
      },
      {
        text: "Sports",
        value:21
      },
      {
        text: "Geography",
        value:22
      },
      {
        text: "History",
        value:23
      },
      {
        text: "Politics",
        value:24
      },
      {
        text: "Art",
        value:25
      },
      {
        text: "Celebrities",
        value:26
      },
      {
        text: "Animals",
        value:27
      },
      {
        text: "Vehicles",
        value:28
      },
      {
        text: "Entertainment: Comics",
        value:29
      },
      {
        text: "Science: Gadgets",
        value:30
      },
      {
        text: "Entertainment: Japanese Anime & Manga",
        value:31
      },
      {
        text: "Entertainment: Cartoon & Animations",
        value:32
      },
    ])
  }
}

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
        type:"Any Type",
        value:""
      },
      {
        type:"Multiple choise",
        value:"multiple"
      },
      {
        type:"True / False",
        value:"boolean"
      }
    ])
  }
  getDifficulty():Observable<Difficulty[]>{
    return of([
      {
        difficulty:"Any Difficulty"
      },
      {
        difficulty:"Easy"
      },
      {
        difficulty:"Medium"
      },
      {
        difficulty:"Hard"
      }
    ])
  }
  getCategory():Observable<Category[]>{
    return of([
      {
        category:"Any Category",
        value:1
      },
      {
        category: "general knowledge",
        value:9
      },
      {
        category: "Entertainment: Books",
        value:10
      },
      {
        category: "Entertainment: Film",
        value:11
      },
      {
        category: "Entertainment: Music",
        value:12
      },
      {
        category: "Entertainment: Musicals & Theatres",
        value:13
      },
      {
        category: "Entertainment: Television",
        value:14
      },
      {
        category: "Entertainment: Video Games",
        value:15
      },
      {
        category: "Entertainment: Board Games",
        value:16
      },
      {
        category: "Science & Nature",
        value:17
      },
      {
        category: "Science: Computers",
        value:18
      },
      {
        category: "Science: Mathematics",
        value:19
      },
      {
        category: "Mythology",
        value:20
      },
      {
        category: "Sports",
        value:21
      },
      {
        category: "Geography",
        value:22
      },
      {
        category: "History",
        value:23
      },
      {
        category: "Politics",
        value:24
      },
      {
        category: "Art",
        value:25
      },
      {
        category: "Celebrities",
        value:26
      },
      {
        category: "Animals",
        value:27
      },
      {
        category: "Vehicles",
        value:28
      },
      {
        category: "Entertainment: Comics",
        value:29
      },
      {
        category: "Science: Gadgets",
        value:30
      },
      {
        category: "Entertainment: Japanese Anime & Manga",
        value:31
      },
      {
        category: "Entertainment: Cartoon & Animations",
        value:32
      },
    ])
  }
}

import { Component, EventEmitter, OnInit } from '@angular/core';
import { Category, Difficulty, Type } from '../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories:Category[]=[
    {
    category:"Any Category",
    value:1
    },
    {
      category: "general knowledge",
      value:2
    },
    {
      category: "Science: Computers",
      value:18
    }
  ]
  difficulties:Difficulty[]=[
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
  ]
  types:Type[]=[
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
  ]
  constructor() { }
  changeCategorySelection(event:any){
    console.log(event.value)
  }
  changeDifficultySelection(event:any){
    console.log(event.value)
  }
  changeTypeSelection(event:any){
    console.log(event.value)
  }
  ngOnInit(): void {
  }

}

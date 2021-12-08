import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category, Difficulty, Type } from '../interfaces';
import { QuestionService } from '../../question/question.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output() outTypes = new EventEmitter<any[]>();
  categories!:Category[]
  difficulties!:Difficulty[]
  types!:Type[]
  selectorCategory:any=""
  selectorDifficulty:any=""
  selectorType:any=""
  constructor(private questionService: QuestionService, private mainService: MainService) {
    this.mainService.getTypes().subscribe((types:Type[])=>this.types=types)
    this.mainService.getDifficulty().subscribe((difficulties:Difficulty[])=>this.difficulties=difficulties)
    this.mainService.getCategory().subscribe((categories:Category[])=>this.categories=categories)
  }

  changeCategorySelection(event:any){
    console.log(event.value)
    this.questionService.changeCategory(event.value)
  }
  changeDifficultySelection(event:any){
    console.log(event.value)
    this.questionService.changeDifficulty(event.value)
  }
  changeTypeSelection(event:any){
    console.log(event.value)
    this.questionService.changeType(event.value)
  }
  ngOnInit(): void {
    this.selectorCategory=this.categories[0].value
    this.selectorDifficulty=this.difficulties[0].difficulty
    this.selectorType=this.types[0].value

    this.questionService.changeCategory(this.selectorCategory)
    this.questionService.changeDifficulty(this.selectorDifficulty)
    this.questionService.changeType(this.selectorType)
  }
  onclick(event:MouseEvent){
    //this.outTypes.emit([this.selCategory, this.selDifficulty, this.selType])
  }

}

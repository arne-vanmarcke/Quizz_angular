import { Component, OnInit, } from '@angular/core';
import { Category, Difficulty, Type } from '../interfaces';
import { QuestionService } from '../../question/question.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
    this.questionService.changeCategory(event.value)
  }
  changeDifficultySelection(event:any){
    this.questionService.changeDifficulty(event.value)
  }
  changeTypeSelection(event:any){
    this.questionService.changeType(event.value)
  }
  setName(event:any){
    this.questionService.changeName(event.value)
  }
  ngOnInit(): void {
    this.selectorCategory=this.categories[0].value
    this.selectorDifficulty=this.difficulties[0].text
    this.selectorType=this.types[0].value

    this.questionService.changeCategory(this.selectorCategory.toString())
    this.questionService.changeDifficulty(this.selectorDifficulty)
    this.questionService.changeType(this.selectorType)

    this.questionService.resetScore()
  }


}

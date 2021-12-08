import { Component, OnInit } from '@angular/core';
import { Highscore } from '../highscore';
import { HighscoreService } from '../highscore.service'

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

  highscores!:Highscore[];
  numberArr!:number[];
  Received!:boolean;
  hs:Highscore={
    id:1,
    score:0,
  };

  constructor(private HighscoreApi: HighscoreService){
    this.HighscoreApi.getHighscores().subscribe((highscores: Highscore[])=>{
      this.highscores=highscores;
      console.log(this.highscores)
    })
  }

  ngOnInit(): void {
  }

  postScore(event:MouseEvent):void{
    console.log("high: ",this.highscores)
    var max=Math.max.apply(Math,this.highscores.map(i=>{return i.id}))
    if(max.toString()=="-Infinity")
      max=0;
    this.hs.id=max+1;
    this.hs.score=200;
    this.HighscoreApi.postHighscore(this.hs).subscribe(data=>{
      this.HighscoreApi.getHighscores().subscribe((highscores: Highscore[])=>{
        this.highscores=highscores;
        console.log(this.highscores)
      })
    })

  }


}


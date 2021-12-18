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
    score:0,
  };
  sortHighscores!:any;

  constructor(private HighscoreApi: HighscoreService){
    this.HighscoreApi.getHighscores().subscribe((highscores: Highscore[])=>{
      this.highscores=highscores;
      this.highscores.sort((a,b)=>{return b.score-a.score})
    })
  }

  ngOnInit(): void {
  }

}


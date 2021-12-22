import { Component, OnInit, Input } from '@angular/core';
import { Highscore } from '../highscore';


@Component({
  selector: 'app-highscore-table',
  templateUrl: './highscore-table.component.html',
  styleUrls: ['./highscore-table.component.css']
})
export class HighscoreTableComponent implements OnInit {

  @Input() highscores!:Highscore[]

  displayedColumns: string[] = ['id','name','score'];
  dataSource !:Highscore[];
  tableHs:Highscore[]=[];
  constructor() { }

  ngOnInit(): void {
    for(var i=0; i<this.highscores.length; i++)
      this.tableHs.push({id:(i+1).toString(), name:this.highscores[i].name, score: this.highscores[i].score})
    this.dataSource=this.tableHs
  }

}

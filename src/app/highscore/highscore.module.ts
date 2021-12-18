import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http'
import { HighscoreRoutingModule } from './highscore-routing.module';
import { HighscoreComponent } from './highscore/highscore.component';
import { HighscoreTableComponent } from './highscore-table/highscore-table.component';


@NgModule({
  declarations: [HighscoreComponent, HighscoreTableComponent],
  imports: [
    CommonModule,
    HighscoreRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  exports:[HighscoreComponent],
  providers:[DatePipe]
})
export class HighscoreModule { }

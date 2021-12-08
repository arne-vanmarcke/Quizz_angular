import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'
import { HighscoreRoutingModule } from './highscore-routing.module';
import { HighscoreComponent } from './highscore/highscore.component';


@NgModule({
  declarations: [HighscoreComponent],
  imports: [
    CommonModule,
    HighscoreRoutingModule,
    HttpClientModule,
  ],
  exports:[HighscoreComponent],
  providers:[DatePipe]
})
export class HighscoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question/question.component';
import { QuestionCardComponent } from './question-card/question-card.component';


@NgModule({
  declarations: [QuestionComponent, QuestionCardComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    QuestionRoutingModule
  ],
  exports:[QuestionComponent]
})
export class QuestionModule { }

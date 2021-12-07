import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionModule } from './question/question.module';
import { MainModule } from './main/main.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuestionModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

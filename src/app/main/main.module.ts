import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MainRoutingModule
  ],
  exports:[MainComponent]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ColleagueComponent } from './components/colleague/colleague.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule
  ]
})
export class SharedModule { }

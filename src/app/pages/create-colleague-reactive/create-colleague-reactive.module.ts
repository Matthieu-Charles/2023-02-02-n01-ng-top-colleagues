import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactiveComponent } from './create-colleague-reactive.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    CreateColleagueReactiveComponent
  ],
  exports: [
    CreateColleagueReactiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueReactiveModule { }

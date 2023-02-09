import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomePage} from "./pages/welcome/welcome.page";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {CreateColleagueReactiveComponent} from "./pages/create-colleague-reactive/create-colleague-reactive.component";

const ROUTES: Routes = [
  {path:'accueil', component : WelcomePage},
  {path:'form-template', component : CreateColleaguePage},
  {path:'form-reactive', component : CreateColleagueReactiveComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule { }

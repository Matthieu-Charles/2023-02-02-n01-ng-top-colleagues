import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {WelcomeModule} from "./pages/welcome/welcome.module";
import {HttpClientModule} from "@angular/common/http";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateColleagueReactiveModule} from "./pages/create-colleague-reactive/create-colleague-reactive.module";
import { MenuComponentComponent } from './menu/menu-component/menu-component.component';
import {MatTabsModule} from "@angular/material/tabs";
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
    FormsModule,
    CreateColleagueReactiveModule,
    ReactiveFormsModule,
    MatTabsModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


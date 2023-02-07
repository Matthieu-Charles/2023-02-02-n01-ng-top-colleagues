import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ColleagueComponent } from './components/colleague/colleague.component';
import {MatCardModule} from "@angular/material/card";
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { VoteComponent } from './components/vote/vote.component';
import { CounterComponent } from './components/counter/counter.component';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    VoteComponent,
    CounterComponent,
    CreateColleagueFormsComponent
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        VotingHistoryComponent,
        CounterComponent,
        CreateColleagueFormsComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatCardModule,
        MatIconModule,
        MatBadgeModule,
        FormsModule
    ]
})
export class SharedModule { }

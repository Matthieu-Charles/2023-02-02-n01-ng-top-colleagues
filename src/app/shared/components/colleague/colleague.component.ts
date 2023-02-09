import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {ColleagueService} from "../../../providers/colleague.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent{

  @Input() colleague:Colleague = {
    photo: "testPhoto",
    pseudo: "test",
    score: 1
  }

  constructor(private colleagueServ: ColleagueService, private router: Router) {
  }

  envoiVote(val: LikeHate){
    this.colleagueServ.vote(val, this.colleague)
      .subscribe((colleague) => {
        this.colleague = colleague;
      });
  }

  voirDetailColleague() {
    this.router.navigate(['colleagues/:pseudo', {pseudo: this.colleague.pseudo}])
  }
}

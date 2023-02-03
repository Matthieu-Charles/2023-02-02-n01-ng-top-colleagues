import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

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

  majCompteur(val: LikeHate){
    if(val == LikeHate.LIKE) {
      this.colleague.score++
    } else {
      this.colleague.score--
    }
  }

}

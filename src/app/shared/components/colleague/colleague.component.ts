import {Component} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  colleague: Colleague = {
    pseudo: "Bilou",
    score: 654,
    photo: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  };

  majCompteur(val: LikeHate){
    if(val == LikeHate.LIKE) {
      this.colleague.score++
    } else {
      this.colleague.score--
    }
  }

}

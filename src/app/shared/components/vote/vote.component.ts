import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {

  @Input() vote: Vote =
  {
    colleague:
      {
        pseudo: "Bilou ",
        score: 654,
        photo: "https://via.placeholder.com/150"
      },
    vote: LikeHate.LIKE
  };

  @Input() colindex:number = 0;

  @Output() suppressionVote:EventEmitter<number> = new EventEmitter<number>();
  clickSuppressionVote(){
    if (this.vote != undefined)  {
      this.suppressionVote.emit(this.colindex);
    }
  }

}

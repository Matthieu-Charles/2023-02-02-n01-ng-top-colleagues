import {Component} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  listVotes = [
    {
      colleague:
        {
          pseudo: "Jean-Paul ",
          score: 654,
          photo: "https://via.placeholder.com/150"
        },
      vote: LikeHate.LIKE
    },
    {
      colleague:
        {
          pseudo: "Vicente",
          score: 325,
          photo: "https://via.placeholder.com/150"
        },
      vote: LikeHate.LIKE
    }
  ];

  majListe(val: number){
      console.log(val);
      this.listVotes.splice(val, 1);
  }

}

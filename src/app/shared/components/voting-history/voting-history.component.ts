import {Component} from '@angular/core';
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private srvVote: VoteService) {
  }

  listVotes = this.srvVote.listeVote();

  majListe(val: number){
      console.log(val);
      this.listVotes.splice(val, 1);
  }

}

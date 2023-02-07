import {Component} from '@angular/core';
import {VoteService} from "../../../providers/vote.service";
import {Vote} from "../../../models/vote";
import {Subscription} from "rxjs";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  tabVotes: Vote[] = [];

  actionSub: Subscription

  constructor(private srvVote: VoteService, private colleagueSrv: ColleagueService) {

    this.srvVote.listeVote()
      .subscribe((tabVotes) => this.tabVotes = tabVotes);
    //Abonnement au clic sur un bouton "j'aime" ou "je déteste"
    this.actionSub = this.colleagueSrv.actionObs.subscribe(() => {
      //Rechargement de la liste lors de l'événement
      this.srvVote.listeVote()
        .subscribe((tabVotes) => this.tabVotes = tabVotes)})
  }

}

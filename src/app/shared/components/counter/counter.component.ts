import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {ColleagueService} from "../../../providers/colleague.service";


@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent{
  matBadgeDown: number = 0;
  matBadgeUp: number = 0;

  actionSub:Subscription;
  constructor(private colleagueSrv: ColleagueService) {
    this.actionSub = this.colleagueSrv.actionObs.subscribe(
      (data) => data === 0? this.matBadgeUp++ : this.matBadgeDown++
    )
  }


}

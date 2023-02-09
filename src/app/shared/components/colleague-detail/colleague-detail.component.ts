import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ColleagueService} from "../../../providers/colleague.service";
import {ColleagueApi} from "../../../models/colleagueApi";

@Component({
  selector: 'tc-colleague-detail',
  templateUrl: './colleague-detail.component.html',
  styleUrls: ['./colleague-detail.component.scss']
})
export class ColleagueDetailComponent {

  pseudo?: string;
  colleague!: ColleagueApi;

  constructor(private route: ActivatedRoute, colleagueSrv: ColleagueService) {
    const pseudoTemp = route.snapshot.paramMap.get("pseudo");
    if (pseudoTemp) this.pseudo = pseudoTemp;

    if (this.pseudo) colleagueSrv.getColleagueByPseudo(this.pseudo)
      .subscribe(coll => this.colleague = coll);

  }

}

import {Component} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  tabCollegue:Colleague[] = [];
  constructor(private cls: ColleagueService) {
    this.cls.list().subscribe((tabColleague => this.tabCollegue = tabColleague));
  }

  rafraichir() {
    this.cls.list().subscribe((tabColleague => this.tabCollegue = tabColleague));
  }
}



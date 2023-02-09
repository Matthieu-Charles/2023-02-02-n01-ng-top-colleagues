import { Component } from '@angular/core';
import {createColleagueForm} from "../../../models/createColleagueForm";
import {ColleagueService} from "../../../providers/colleague.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private colleagueSrv: ColleagueService, private router: Router) {
  }
  createColleagueForm = new createColleagueForm();
  submit() {
    console.log(this.createColleagueForm);
    this.colleagueSrv.createColleague(this.createColleagueForm)
      .subscribe(data => console.log(data))
    this.retourListeCollegues();
  }

  retourListeCollegues(){
      this.router.navigate(['accueil']);
  }

}

import { Component } from '@angular/core';
import {createColleagueForm} from "../../../models/createColleagueForm";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private colleagueSrv: ColleagueService) {
  }
  createColleagueForm = new createColleagueForm();
  submit() {
    console.log(this.createColleagueForm);
    this.colleagueSrv.createColleague(this.createColleagueForm)
      .subscribe(data => console.log(data))
  }
}

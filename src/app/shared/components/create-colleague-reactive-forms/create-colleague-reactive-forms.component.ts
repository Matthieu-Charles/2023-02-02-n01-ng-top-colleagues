import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {createColleagueForm} from "../../../models/createColleagueForm";
import {ColleagueService} from "../../../providers/colleague.service";


@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {

  myReacForm: FormGroup;

  createColleagueForm = new createColleagueForm();

  constructor(private fb: FormBuilder, private colleagueSrv: ColleagueService) {
    this.myReacForm = this.fb.group({
        prenom: ['', [Validators.required, Validators.minLength(2)]],
        nom: ['', [Validators.required, Validators.minLength(2)]],
        pseudo: ['', [Validators.required]],
        photoUrl: ['', [Validators.required]],
        submit: ['', []],

    })
  }


  onSubmit() {
    this.createColleagueForm.pseudo = this.myReacForm.get('pseudo')?.value;
    this.createColleagueForm.last = this.myReacForm.get('nom')?.value;
    this.createColleagueForm.first = this.myReacForm.get('prenom')?.value;
    this.createColleagueForm.photo = this.myReacForm.get('photoUrl')?.value;
    console.log(this.createColleagueForm);
    this.colleagueSrv.createColleague(this.createColleagueForm)
      .subscribe(data => console.log(data))
  }

}

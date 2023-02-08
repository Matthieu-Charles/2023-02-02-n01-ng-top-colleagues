import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl} from "@angular/forms";
import {createColleagueForm} from "../../../models/createColleagueForm";
import {ColleagueService} from "../../../providers/colleague.service";
import {map, Observable} from "rxjs";


@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {

  myReacForm: FormGroup;

  createColleagueForm = new createColleagueForm();

  constructor(private colleagueSrv: ColleagueService, private fb: FormBuilder) {
    this.myReacForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      pseudo: ['',
        {
          validators: [Validators.required],
          asyncValidators: [this.validatePseudo.bind(this)]
        }],
      photoUrl: ['', [Validators.required]],
    }, {validator: this.validateFirstAndLast})
  }

  validateFirstAndLast(control: AbstractControl): ValidationErrors | null {
    let name = control.value.prenom;
    let last = control.value.nom;
    if (name != last) {
      return null;
    }
    return { firstLast : 'first name must be different from lastname' }
  }

  validatePseudo(control: AbstractControl): Observable<ValidationErrors | null> {

    console.log(control.value);

    return this.colleagueSrv.getColleagueByPseudo(control.value)
      .pipe(map((isUsed) => {
          return !isUsed ? null : {
            pseudoValidator: 'pseudo exists already.'
          };
        })
      );
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

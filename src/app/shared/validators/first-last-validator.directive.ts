import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true}]
})
export class FirstLastValidatorDirective implements  Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let name = control.value.prenom;
    let last = control.value.nom;
    if (name != last) {
      return null;
    }
      return { firstLast : 'first name must be different from lastname' }
  }
}



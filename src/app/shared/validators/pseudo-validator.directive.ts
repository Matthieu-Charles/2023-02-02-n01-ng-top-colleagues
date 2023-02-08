import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {ColleagueService} from "../../providers/colleague.service";

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator{

  constructor(private colleagueSrv: ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    console.log(control.value);

    return this.colleagueSrv.getColleagueByPseudo(control.value)
      .pipe(map((isUsed) => {
          return !isUsed ? null : {
            pseudoValidator: 'pseudo exists already.'
          };
        })
      );
  }

}

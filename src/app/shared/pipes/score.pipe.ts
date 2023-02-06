import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number): string {
    return value < 0? "- " + Math.abs(value) : "+ " + Math.abs(value);
  }

}

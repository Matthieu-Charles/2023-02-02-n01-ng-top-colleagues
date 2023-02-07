import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  constructor() {
  }
  LikeHate = LikeHate;
  @Input() compteur:number = 0;
  @Output() clickLoveOrHate:EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  LikeOrHate(likehate: LikeHate){
    this.clickLoveOrHate.emit(likehate);
  }

}

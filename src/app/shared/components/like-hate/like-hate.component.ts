import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import {EventBusService} from "../../../providers/event-bus.service";
import {EventLikeOrHate} from "../../events/EventLikeOrHate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  constructor(private evbus: EventBusService) {
  }
  LikeHate = LikeHate;
  @Input() compteur:number = 0;
  @Output() clickLoveOrHate:EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  LikeOrHate(likehate: LikeHate){
    this.clickLoveOrHate.emit(likehate);
    this.evbus.emit(new EventLikeOrHate('EventLikeOrHate', likehate));
  }

}

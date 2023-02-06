import { Component } from '@angular/core';
import {EventBusService} from "../../../providers/event-bus.service";
import {EventLikeOrHate} from "../../events/EventLikeOrHate";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  matBadgeDown: number = 0;
  matBadgeUp: number = 0;

  constructor(private evbus: EventBusService) {
  }

  ngOnInit(){
    this.evbus.on('EventLikeOrHate',
      (data: EventLikeOrHate) => {
      data.value === 0? this.matBadgeUp += 1 : this.matBadgeDown += 1;
      })
  }

}

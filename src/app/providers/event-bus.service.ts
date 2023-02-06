import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {EventLikeOrHate} from "../shared/events/EventLikeOrHate";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject();
  constructor() { }

  emit(event: EventLikeOrHate){
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$
      .subscribe(action);
  }

}

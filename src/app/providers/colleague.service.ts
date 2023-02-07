import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Observable, Subject, tap} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VoteApi} from "../models/voteApi";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) { }
  private action = new Subject<LikeHate>();

  get actionObs() {
    return this.action.asObservable();
  }

  emit(data: LikeHate) {
    this.action.next(data);
  }

  list(): Observable<Colleague[]> {
      return this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues')
  }

  vote(val: LikeHate, colleague: Colleague) :Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .post<VoteApi>(
        'https://dev.cleverapps.io/api/v2/votes',
        {
          "like_hate" : val === 0? "LIKE" : "HATE",
          "pseudo": colleague.pseudo
        },
        httpOptions
      ).pipe(
        tap(()=> this.emit(val))
      );
  }

}

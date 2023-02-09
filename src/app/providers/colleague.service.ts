import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Observable, Subject, tap} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VoteApi} from "../models/voteApi";
import {createColleagueForm} from "../models/createColleagueForm";
import {ColleagueApi} from "../models/colleagueApi";

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

  existsColleagueByPseudo(pseudo: string) {
    return this.http.get<boolean>('https://dev.cleverapps.io/api/v2/colleagues/' + pseudo)
  }

  getColleagueByPseudo(pseudo: string) {
    return this.http.get<ColleagueApi>('https://dev.cleverapps.io/api/v2/colleagues/' + pseudo)
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


    // POST https://dev.cleverapps.io/api/v2/colleagues
    //   Content-Type: application/json
    //
    // {
    //   "pseudo":  "demo01",
    //   "last" :  "demoLast",
    //   "first": "demoFirst",
    //   "photo" :  "https://randomuser.me/api/portraits/men/90.jpg"
    // }


  createColleague(colleague: createColleagueForm) :Observable<any> {
    console.log("dans create Colleague");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .post<createColleagueForm>(
        'https://dev.cleverapps.io/api/v2/colleagues',
        {
          "pseudo":  colleague.pseudo,
          "last" :  colleague.last,
          "first": colleague.first,
          "photo" :  "https://randomuser.me/api/portraits/men/24.jpg"
        },
        httpOptions
      )
  }

}

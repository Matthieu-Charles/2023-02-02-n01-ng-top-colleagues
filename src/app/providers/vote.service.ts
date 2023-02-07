import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  listeVote(): Observable<Vote[]> {
    return this.http.get<Vote[]>('https://dev.cleverapps.io/api/v2/votes')
  }

}

import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }
  private action = new Subject<LikeHate>();

  get actionObs() {
    return this.action.asObservable();
  }

  emit(data: LikeHate) {
  // exécution de l'action
  // notification de tous les observateurs avec la donnée courante
    this.action.next(data);
  }

  list(): Colleague[] {
    let listeCollegue: Colleague[] = [];

    for (var i = 1; i < 15; i++) {
      let tempColleague = {
        pseudo: "Bilou " + i,
        score: 2,
        photo: "https://picsum.photos/150"
      };
      listeCollegue.push(tempColleague);
    }

    return listeCollegue;
  }
}

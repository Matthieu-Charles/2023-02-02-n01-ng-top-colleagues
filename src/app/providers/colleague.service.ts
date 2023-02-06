import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

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

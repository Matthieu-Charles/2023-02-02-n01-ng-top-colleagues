import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  listeVote(): Vote[] {
    return [
      {
        colleague:
          {
            pseudo: "Jean-Paul ",
            score: 654,
            photo: "https://via.placeholder.com/150"
          },
        vote: LikeHate.LIKE
      },
      {
        colleague:
          {
            pseudo: "Vicente",
            score: 325,
            photo: "https://via.placeholder.com/150"
          },
        vote: LikeHate.LIKE
      }
    ]
  }

}

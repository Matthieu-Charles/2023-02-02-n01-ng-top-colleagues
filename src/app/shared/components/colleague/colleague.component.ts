import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  colleague: Colleague = {
    pseudo: "Bilou",
    score: 800,
    photo: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  };

  compteur: number = 12;

}

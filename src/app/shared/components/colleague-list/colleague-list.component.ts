import {Component, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  listeCollegue:Colleague[] = [];

  ngOnInit(){
    for(var i = 1; i<15; i++){
      let tempColleague = {
        pseudo: "Bilou " + i,
        score: 654,
        photo: "https://via.placeholder.com/150"
      };
      this.listeCollegue.push(tempColleague);
  }

}

}

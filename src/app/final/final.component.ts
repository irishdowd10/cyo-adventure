import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  providers: [PlayerService]
})
export class FinalComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.playerId = urlParameters['id'];
   });
   this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}

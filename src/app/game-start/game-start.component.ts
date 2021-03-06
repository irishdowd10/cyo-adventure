import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css'],
  providers: [PlayerService]
})
export class GameStartComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService)
   { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.playerId = urlParameters['id'];
   });
   this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

  goToSecondGood(playerId) {
    this.router.navigate(['second-good', playerId]);
  };

  goToSecondBad(playerId) {
    this.router.navigate(['second-bad', playerId]);
  };

}

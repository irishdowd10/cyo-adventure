import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-bad',
  templateUrl: './second-bad.component.html',
  styleUrls: ['./second-bad.component.css'],
  providers: [PlayerService]
})
export class SecondBadComponent implements OnInit {
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

  goToThirdBadGood(playerId) {
    this.router.navigate(['third-bad-good', playerId]);
  };

  goToThirdBadBad(playerId) {
    this.router.navigate(['third-bad-bad', playerId]);
  };

}

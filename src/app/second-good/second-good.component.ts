import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-good',
  templateUrl: './second-good.component.html',
  styleUrls: ['./second-good.component.css'],
  providers: [PlayerService]
})
export class SecondGoodComponent implements OnInit {
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

  goToThirdGoodGood(playerId) {
    this.router.navigate(['third-good-good', playerId]);
  };

  goToThirdGoodBad(playerId) {
    this.router.navigate(['third-good-bad', playerId]);
  };


}

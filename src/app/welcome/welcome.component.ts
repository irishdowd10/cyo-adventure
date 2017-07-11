import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayer();
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  goToGameStart(clickedPlayer) {
    this.router.navigate(['game-start', clickedPlayer.$key]);
  };

}

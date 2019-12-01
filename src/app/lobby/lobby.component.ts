import { Component, OnInit } from '@angular/core';
import { Model, Game } from "../model";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  model = new Model()

  constructor() { }

  getGames() {
    return this.model.games;
  }
  joinGame() {
    console.log("Joined!");
  }
  createGame() {
    console.log("Created!")
  }


}

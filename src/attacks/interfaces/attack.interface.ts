import { Game } from "src/games/interfaces/game.interface";

export interface Attack {
  _id: string;
  games: [
    {
      game: Game;
      description: string;
      key: string;
    }
  ];
  power: number;
  precision: number;
  priority: number;
  hp: number;
  ct_cs: string;
}
import { Document } from 'mongoose';
import { Game } from "src/games/interfaces/game.interface";

export interface Attack extends Document {
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
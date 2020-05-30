import { Document } from 'mongoose';
import { Game } from "src/games/interfaces/game.interface";
import { Attack } from "src/attacks/interfaces/attack.interface";
import { Type } from "src/types/interfaces/type.interface";

export interface Pokemon extends Document {
  _id: string;
  names: {
    french: string;
    english: string;
    japanese: string;
  };
  slug: string;
  family: string;
  description: string;
  generation: number;
  pokedex: [
    {
      name: string;
      key: string;
      number: string;
      versions: [
        {
          games: Game[];
          key: string;
        }
      ]
    }
  ];
  attacks: [
    {
      attack: Attack;
      level: string;
    }
  ];
  evolutions: [
    {
      stade: string;
      pokemon: Pokemon;
      description: string;
    }
  ];
  egg_group: string;
  height: number;
  weight: number;
  talents: [
    {
      name: string;
      description: string;
    }
  ];
  sex: [
    {
      label: string;
      key: string;
      percentage: number;
    }
  ];
  places: [
    {
      game: Game;
      place: string;
    }
  ];
  statistics: {
    hp: {
      name: string;
      value: number;
    };
    attack: {
      name: string;
      value: number;
    };
    defense: {
      name: string;
      value: number;
    };
    sp_attack: {
      name: string;
      value: number;
    };
    sp_defense: {
      name: string;
      value: number;
    };
    speed: {
      name: string;
      value: number;
    };
  };
  color: string;
  size: string;
  catch_rate: number;
  types: Type[];
  weaknesses: Type[];
}
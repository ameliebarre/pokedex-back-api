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
  pokedex: Array<Pokedex>;
  attacks: Array<Attacks>;
  evolutions: Array<Evolution>;
  egg_group: string;
  height: number;
  weight: number;
  talents: Array<Talent>;
  sex: Array<Sex>;
  places: Array<Place>;
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

interface Pokedex {
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

interface Attacks {
  attack: Attack;
  level: string;
}

interface Evolution {
  stade: string;
  pokemon: Pokemon;
  description: string;
}

interface Talent {
    name: string;
    description: string;
}

interface Place {
  game: Game;
  place: string;
}

interface Sex {
  label: string;
  key: string;
  percentage: number;
}
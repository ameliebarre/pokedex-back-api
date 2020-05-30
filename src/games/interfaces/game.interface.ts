import { Document } from 'mongoose';
import { Pokemon } from "src/pokemons/interfaces/pokemon.interface";

export interface Game extends Document {
  _id: string;
  name: string;
  slug: string;
  year: string;
  pokemons: Pokemon[];
}
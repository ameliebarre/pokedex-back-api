import { Pokemon } from "src/pokemons/interfaces/pokemon.interface";

export interface Game {
  _id: string;
  name: string;
  slug: string;
  year: string;
  pokemons: Pokemon[];
}
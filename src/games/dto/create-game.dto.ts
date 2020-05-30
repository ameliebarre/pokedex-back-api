import { Pokemon } from "src/pokemons/interfaces/pokemon.interface";

export class CreateGameDTO {
  _id: string;
  name: string;
  slug: string;
  year: string;
  pokemons: Pokemon[];
}
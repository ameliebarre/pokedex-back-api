import { Pokemon } from "src/pokemons/interfaces/pokemon.interface";

export class UpdateGameDTO {
  name: string;
  slug: string;
  year: string;
  pokemons: Pokemon[];
}
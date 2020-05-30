import { Pokemon } from "src/pokemons/interfaces/pokemon.interface";

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  pokemons: Pokemon[];
  role: string;
}
import { Injectable } from "@nestjs/common";
import { Pokemon } from "../interfaces/pokemon.interface";

@Injectable()
export class PokemonService {
  private readonly pokemons: Pokemon[] = [];

  /**
   * Find all Pokemons
   */
  findAll(): Pokemon[] {
    return this.pokemons;
  }

  /**
   * Get a Pokemon by its slug
   */
  findOne(slug: string): void {}

  /**
   * Create a new Pokemon
   * @param pokemon 
   */
  create(pokemon: Pokemon) {}

  /**
   * Update a Pokemon
   * @param pokemon
   */
  update(pokemon: Pokemon) {}

  /**
   * Delete a Pokemon
   * @param slug 
   */
  delete(slug: string) {}
}
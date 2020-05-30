import { Injectable } from "@nestjs/common";
import { Pokemon } from "../interfaces/pokemon.interface";

@Injectable()
export class PokemonService {
  private readonly pokemons: Pokemon[] = [];

  /**
   * Find all Pokemons
   * @returns {Pokemon[]}
   */
  findAll(): Pokemon[] {
    return this.pokemons;
  }

  /**
   * Get a Pokemon by its slug
   * @param {string} slug
   * @returns {Pokemon}
   */
  findOne(slug: string): void {}

  /**
   * Create a new Pokemon
   * @param {Pokemon} pokemon
   */
  create(pokemon: Pokemon) {}

  /**
   * Update a Pokemon
   * @param {string} slug
   */
  update(slug: string) {}

  /**
   * Delete a Pokemon
   * @param {string} slug 
   */
  delete(slug: string) {}
}
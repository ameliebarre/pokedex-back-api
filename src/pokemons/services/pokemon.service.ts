import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from "../interfaces/pokemon.interface";

@Injectable()
export class PokemonService {
  
  constructor(@InjectModel('Pokemon') private pokemonModel: Model<Pokemon>) {}

  /**
   * Find all Pokemons
   * @returns {Pokemon[]}
   */
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonModel.find().exec();
  }

  /**
   * Get a Pokemon by its slug
   * @param {string} slug
   * @returns {Pokemon}
   */
  async findOne(slug: string): Promise<Pokemon> {
    return this.pokemonModel.findOne({ slug }).exec();
  }

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
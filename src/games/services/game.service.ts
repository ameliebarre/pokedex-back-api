import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from "../interfaces/game.interface";

@Injectable()
export class GameService {
  
  constructor(@InjectModel('Game') private pokemonModel: Model<Game>) {}

  /**
   * Find all Pokemon video games
   * @returns {Game[]}
   */
  findAll(): void {}

  /**
   * Get a Pokemon video game by its slug
   * @param {string} slug
   * @returns {Game}
   */
  findOne(slug: string): void {}

  /**
   * Create a new Pokemon video game
   * @param game
   */
  create(game: Game) {}

  /**
   * Update a Pokemon video game
   * @param {string} slug
   */
  update(slug: string) {}

  /**
   * Delete a Pokemon video game
   * @param {string} slug 
   */
  delete(slug: string) {}
}
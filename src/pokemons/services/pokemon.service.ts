import { Model, model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from "../interfaces/pokemon.interface";
import { CreatePokemonDTO } from '../dto/create-pokemon.dto';
import { Type } from "../../types/interfaces/type.interface";

@Injectable()
export class PokemonService {
  
  constructor(@InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>) {}

  /**
   * Find all Pokemons
   * @returns {Pokemon[]}
   */
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonModel.aggregate([
      {
        $match: {}
      },
      {
        $lookup: {
            from: "types",
            localField: "weaknesses",
            foreignField: "_id",
            as: "weaknesses"
        }
      },
      {
        $lookup: {
            from: "types",
            localField: "types",
            foreignField: "_id",
            as: "types"
        }
      },
    ]).exec();
  }

  /**
   * Get a Pokemon
   * @param {string} slug
   * @returns {Pokemon}
   */
  async findOne(slug: string): Promise<Pokemon> {    
    const pokemon = await this.pokemonModel.aggregate([
      {
        $match: {
            slug
        }
      },
      {
        $lookup: {
            from: "types",
            localField: "weaknesses",
            foreignField: "_id",
            as: "weaknesses"
        }
      },
      {
        $lookup: {
            from: "types",
            localField: "types",
            foreignField: "_id",
            as: "types"
        }
      },
    ]).exec();

    if (!pokemon) {
      throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
    }

    return pokemon;
  }

  /**
   * Create a new Pokemon
   * @param {Pokemon} pokemon
   */
  async create(createCatDto: CreatePokemonDTO): Promise<Pokemon> {
    const createdCat = new this.pokemonModel(createCatDto);
    return await createdCat.save();
  }

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
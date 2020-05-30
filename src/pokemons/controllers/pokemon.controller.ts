import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreatePokemonDTO } from '../dto/create-pokemon.dto';
import { UpdatePokemonDTO } from '../dto/update-pokemon.dto';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interface';

@Controller('pokemons')
export class PokemonController {

  constructor(private pokemonService: PokemonService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<any> {}

  @Post()
  async create(@Body() createPokemonDTO: CreatePokemonDTO) {
    this.pokemonService.create(createPokemonDTO);
  }

  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updatePokemonDTO: UpdatePokemonDTO) {}

  @Delete(':slug')
  async delete(@Param('slug') slug: string): Promise<any> {}
}
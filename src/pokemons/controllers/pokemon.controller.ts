import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreatePokemonDTO } from '../dto/create-pokemon.dto';
import { UpdatePokemonDTO } from '../dto/update-pokemon.dto';

@Controller('pokemons')
export class PokemonController {
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<any> {}

  @Post()
  async create(@Body() createPokemonDTO: CreatePokemonDTO): Promise<any> {}

  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updatePokemonDTO: UpdatePokemonDTO): Promise<any> {}

  @Delete(':slug')
  async delete(@Param('slug') slug: string): Promise<any> {}
}
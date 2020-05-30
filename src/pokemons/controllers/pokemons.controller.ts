import { Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('pokemons')
export class PokemonsController {
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<any> {}

  @Post()
  async create(): Promise<any> {}

  @Put(':slug')
  async update(@Param('slug') slug: string): Promise<any> {}

  @Delete(':slug')
  async delete(@Param('slug') slug: string): Promise<any> {}
}
import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { GameService } from "../services/game.service";
import { Game } from '../interfaces/game.interface';
import { CreateGameDTO } from '../dto/create-game.dto';
import { UpdateGameDTO } from '../dto/update-game.dto';

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<any> {}

  @Post()
  async create(@Body() createGameDTO: CreateGameDTO) {
    this.gameService.create(createGameDTO);
  }

  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updateGameDTO: UpdateGameDTO) {}

  @Delete(':slug')
  async delete(@Param('slug') slug: string): Promise<any> {}
}
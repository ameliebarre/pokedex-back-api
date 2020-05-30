import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { AttackService } from '../services/attack.service';
import { CreateAttackDTO } from '../dto/create-attack.dto';
import { UpdateAttackDTO } from '../dto/update-attack.dto';

@Controller('attacks')
export class AttackController {

  constructor(private attackService: AttackService) {}

  @Post()
  async create(@Body() createAttackDTO: CreateAttackDTO) {}

  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updateAttackDTO: UpdateAttackDTO) {}

  @Delete(':slug')
  async delete(@Param('slug') slug: string): Promise<any> {}
}
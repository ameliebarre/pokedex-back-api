import { Controller, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { TypeService } from "../services/type.service";
import { UpdateTypeDTO } from "../dto/update-type.dto";
import { CreateTypeDTO } from "../dto/create-type.dto";

@Controller('types')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Post()
  async create(@Body() createTypeDTO: CreateTypeDTO) {}

  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updateTypeDTO: UpdateTypeDTO) {}

  @Delete(':slug')
  async delete(@Param('slug') slug: string): Promise<any> {}
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './services/pokemon.service';
import { PokemonSchema } from './schemas/pokemon.schema';
import { TypeSchema } from 'src/types/schemas/type.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Pokemon', schema: PokemonSchema },
    { name: 'Type', schema: TypeSchema }
  ])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
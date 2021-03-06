
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './services/pokemon.service';
import { PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
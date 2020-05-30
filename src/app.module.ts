import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemons/controllers/pokemon.controller';
import { PokemonService } from './pokemons/services/pokemon.service';

@Module({
  imports: [],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
})
export class AppModule {}

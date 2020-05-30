import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemons/pokemon.module';
import { TypeModule } from './types/type.module';

@Module({
  imports: [
    PokemonModule,
    TypeModule,
  ],
})
export class AppModule {}
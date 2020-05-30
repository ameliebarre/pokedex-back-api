import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemons/pokemon.module';
import { TypeModule } from './types/type.module';
import { GameModule } from './games/game.module';
import { AttackModule } from './attacks/attack.module';

@Module({
  imports: [
    PokemonModule,
    TypeModule,
    GameModule,
    AttackModule,
  ],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemons/pokemon.module';
import { TypeModule } from './types/type.module';
import { GameModule } from './games/game.module';
import { AttackModule } from './attacks/attack.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pokedex'),
    PokemonModule,
    TypeModule,
    GameModule,
    AttackModule,
  ],
})
export class AppModule {}
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GameController } from "./controllers/game.controller";
import { GameService } from "./services/game.service";
import { GameSchema } from "./schemas/game.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
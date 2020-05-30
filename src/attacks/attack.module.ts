import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AttackController } from "./controllers/attack.controller";
import { AttackService } from "./services/attack.service";
import { AttackSchema } from "./schemas/attack.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Attack', schema: AttackSchema }])],
  controllers: [AttackController],
  providers: [AttackService],
})
export class AttackModule {}
import { Module } from "@nestjs/common";
import { AttackController } from "./controllers/attack.controller";
import { AttackService } from "./services/attack.service";

@Module({
  controllers: [AttackController],
  providers: [AttackService],
})
export class AttackModule {}
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { TypeController } from "./controllers/type.controller";
import { TypeService } from "./services/type.service";
import { TypeSchema } from "./schemas/type.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Type', schema: TypeSchema }])],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';

@Module({
  imports: [MongooseModule.forRoot('')],
  providers: [MongoService]
})
export class MongoModule {}

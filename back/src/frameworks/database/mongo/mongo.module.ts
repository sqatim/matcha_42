import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sqatim:Borntobeleader@cluster.nan4c.mongodb.net/?retryWrites=true&w=majority')],
  providers: [MongoService]
})
export class MongoModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/core/schema/message.schema';
import { MessageService } from './message.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
  providers: [MessageService],
  exports: [MessageService]
})
export class MessageModule {}

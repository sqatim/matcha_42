import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversationSchema } from 'src/core/schema/conversation.schema';
import { ConversationService } from './conversation.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Conversation', schema: ConversationSchema }])],
  providers: [ConversationService],
  exports: [ConversationService]
})
export class ConversationModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Conversation } from './conversation.schema';
import { User } from './user.schema';

export type MessageDocument = Message & Document;

@Schema({timestamps: true})
export class Message {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  sender: User;

  @Prop({ type: Types.ObjectId, ref: 'Conversation' })
  conversation: Conversation;

  @Prop()
  text: string;

}

export const MessageSchema = SchemaFactory.createForClass(Message);

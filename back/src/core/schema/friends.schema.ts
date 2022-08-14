import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from './user.schema';

export type FriendsDocument = Friends & Document;

export enum StatusType {
  ADD = 'add',
  REQUESTED = 'requested',
  PENDING = 'pending',
  FRIENDS = 'friends',
}

@Schema()
export class Friends {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  requester: User;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  recipient: User;

  @Prop({ type: String, enum: StatusType })
  status = StatusType;
}

export const FriendsSchema = SchemaFactory.createForClass(Friends);

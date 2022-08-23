import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from './user.schema';

export type NotificationDocument = Notification & Document;

export enum NotificationType {
  LIKE = 'Like',
  MATCH = 'Match',
  PHOTO = 'Photo',
}

@Schema({ timestamps: true })
export class Notification {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  sender: User;

  @Prop({ type: String, enum: NotificationType })
  type: NotificationType;
  
  @Prop({default: false})
  check: Boolean
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

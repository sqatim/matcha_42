import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {
  // @Prop({required: true})
  // id: string;

  @Prop()
  username: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  password: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  photos: string[];

  @Prop()
  position: string;

  @Prop({ default: false })
  profileCompleted: Boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

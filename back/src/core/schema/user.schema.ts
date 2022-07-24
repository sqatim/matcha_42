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
  gender: string;

  @Prop()
  lookingFor: string;

  @Prop()
  biography: string;

  @Prop()
  dateOfBirth: string;

  @Prop()
  photos: [string];

  @Prop()
  tags: [string];

  @Prop()
  position: [number];

  @Prop({ default: false })
  positionSelected: Boolean;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: false })
  profileCompleted: Boolean;

  @Prop({ default: true })
  firstTimeLogged: Boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Message } from "./message.schema";
import { User } from "./user.schema";

export type  ConversationDocument = Conversation & Document;

@Schema({timestamps: true})
export class Conversation{
   
    @Prop({type:[{type: Types.ObjectId, ref: 'Message'}]})
    messages: Message[]

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
    members: User[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation)
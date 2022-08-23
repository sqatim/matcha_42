import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDocument } from 'src/core/schema/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message')
    private messageModel: Model<MessageDocument>,
  ) {}

  async sendNewMessage(data) {
    const newMessage = await this.messageModel.create(data);
    return newMessage;
  }

  async getMessageOfConversation(conversationId, query) {
    const result = await this.messageModel
      .find({
        conversation: conversationId,
      })
      .sort({ createdAt: -1 })
      .skip(query.offset)
      .limit(query.limit)
      .populate('sender', 'id username avatar')
      .exec();
    return result;
  }
}

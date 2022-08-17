import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConversationDocument } from 'src/core/schema/conversation.schema';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel('Conversation')
    private conversationModel: Model<ConversationDocument>,
  ) {}

  async createNewConversation(myid, friendId) {
    const result = await this.conversationModel.create({
      members: [myid, friendId],
    });
    console.log(result);
  }

  async findMyConversations(id) {
    const conversation = await this.conversationModel
      .find({ members: { $in: [id] } })
      .sort({ updatedAt: -1 })
      .populate('members', '_id username avatar')
      .populate('messages', null, null, { sort: { createdAt: -1 } })
      .exec();
    return conversation;
  }

  async findConversationWithMyFriend(myId, friendId) {
    const conversation = await this.conversationModel
      .findOne({ members: { $all: [myId, friendId] } })
      .sort({ updatedAt: -1 })
      .populate('members', '_id username avatar')
      .populate({
        path: 'messages',
        populate: { path: 'sender' },
        options: { sort: { createdAt: -1 } },
      })
      // .populate('messages', {}, null, { sort: { createdAt: -1 } })
      .exec();
    return conversation;
  }
  async findConversationById(id) {
    const conversation = await this.conversationModel
      .findById(id)
      .populate('members', '_id username avatar')
      .populate('messages')
      .exec();
    return conversation;
  }

  async addMessagesInConversation(id, messageDocument) {
    return await this.conversationModel.findOneAndUpdate(
      { _id: id },
      { $push: { messages: messageDocument._id } },
    );
  }
}

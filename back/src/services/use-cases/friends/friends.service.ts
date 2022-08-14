import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FriendsDocument, StatusType } from 'src/core/schema/friends.schema';

@Injectable()
export class FriendsService {
  constructor(
    @InjectModel('Friends') private friendsModel: Model<FriendsDocument>,
  ) { }

  async findDocument(userA, userB) {
    return await this.friendsModel
      .findOne({
        requester: userA,
        recipient: userB,
      })
      .exec();
  }
  async sendRequest(userA, userB) {
    return await this.friendsModel.findOneAndUpdate(
      {
        requester: userA,
        recipient: userB,
      },
      { $set: { status: StatusType.REQUESTED } },
      { upsert: true, new: true },
    );
  }
  async pendingRequest(userA, userB) {
    return await this.friendsModel.findOneAndUpdate(
      {
        requester: userA,
        recipient: userB,
      },
      { $set: { status: StatusType.PENDING } },
      { upsert: true, new: true },
    );
  }

  async acceptFriendRequest(userA, userB) {
    await this.friendsModel.findOneAndUpdate(
      { requester: userA, recipient: userB },
      { $set: { status: StatusType.FRIENDS } },
    );
  }

  async removeFriend(userA, userB) {
    return await this.friendsModel.findOneAndRemove({
      requester: userA,
      recipient: userB,
    });
  }
  async findMyFriends(myId, query) {
    if (query.limit) {
      if (query.offset)
        return await this.friendsModel
          .find({ requester: myId, status: StatusType.FRIENDS })
          .populate('recipient', 'firstname lastname username avatar status').skip(query.offset).limit(query.limit)
          .exec();
      else
        return await this.friendsModel
          .find({ requester: myId, status: StatusType.FRIENDS })
          .populate('recipient', 'firstname lastname username avatar status').limit(query.limit)
          .exec();

    }
    else
      return await this.friendsModel
        .find({ requester: myId, status: StatusType.FRIENDS })
        .populate('recipient', 'firstname lastname username avatar status')
        .exec();
  }
}

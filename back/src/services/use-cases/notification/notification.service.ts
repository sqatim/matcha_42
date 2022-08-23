import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationDocument } from 'src/core/schema/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification')
    private notificationModel: Model<NotificationDocument>,
  ) {}

  async getMyNotifications(myId) {
    const result = await this.notificationModel
      .find({ user: myId })
      .populate('sender', '_id avatar username')
      .exec();
    return result;
  }
  async getMyNotificationsAndUpdate(myId) {
    const result = await this.notificationModel
      .find({ user: myId })
      .sort({ createdAt: -1 })
      .populate('sender', '_id avatar username')
      .exec();
    await this.notificationModel.updateMany({ user: myId }, { check: true });
    return result;
  }

  async createNotification(notification) {
    return await this.notificationModel.create(notification);
  }
}

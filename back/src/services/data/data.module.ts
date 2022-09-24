import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/frameworks/auth/auth.module';
import { ConversationModule } from '../use-cases/conversation/conversation.module';
import { FriendsModule } from '../use-cases/friends/friends.module';
import { MessageModule } from '../use-cases/message/message.module';
import { NotificationModule } from '../use-cases/notification/notification.module';
import { UserModule } from '../use-cases/user/user.module';
import { UserService } from '../use-cases/user/user.service';
import { DataService } from './data.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    FriendsModule,
    ConversationModule,
    MessageModule,
    NotificationModule,
  ],
  providers: [DataService],
})
export class DataModule {}

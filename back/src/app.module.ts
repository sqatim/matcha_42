import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './frameworks/database/mongo/mongo.module';
import { UserModule } from './services/use-cases/user/user.module';
import { AuthModule } from './frameworks/auth/auth.module';
import { DataModule } from './services/data/data.module';
import { DataService } from './services/data/data.service';
import { UsersController } from './interface-adapters/controllers/users.controller';
import { ProfileController } from './interface-adapters/controllers/profile.controller';
import { FriendsModule } from './services/use-cases/friends/friends.module';
import { FriendsController } from './interface-adapters/controllers/friends.controller';
import { MessageService } from './services/use-cases/message/message.service';
import { ConversationService } from './services/use-cases/conversation/conversation.service';
import { ConversationModule } from './services/use-cases/conversation/conversation.module';
import { MessageModule } from './services/use-cases/message/message.module';
import { ConversationController } from './interface-adapters/controllers/conversation.controller';
import { MessageController } from './interface-adapters/controllers/message.controller';
import { NotificationController } from './interface-adapters/controllers/notification.controller';
import { NotificationModule } from './services/use-cases/notification/notification.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    MongoModule,
    UserModule,
    AuthModule,
    DataModule,
    FriendsModule,
    ConversationModule,
    MessageModule,
    NotificationModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ProfileController,
    FriendsController,
    ConversationController,
    MessageController,
    NotificationController,
  ],
  providers: [AppService, DataService, AppGateway],
})
export class AppModule {}

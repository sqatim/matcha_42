import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DataService } from 'src/services/data/data.service';
import { ConversationModule } from 'src/services/use-cases/conversation/conversation.module';
import { FriendsModule } from 'src/services/use-cases/friends/friends.module';
import { MessageModule } from 'src/services/use-cases/message/message.module';
import { UserModule } from 'src/services/use-cases/user/user.module';
import { UserService } from 'src/services/use-cases/user/user.service';
import { GoogleStrategy } from './google/google.strategy';
import { jwtConstants } from './jwt/constants';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
    UserModule,
    FriendsModule,
    ConversationModule,
    MessageModule,
  ],
  providers: [GoogleStrategy, JwtStrategy, DataService],
  exports: [JwtModule],
})
export class AuthModule {}

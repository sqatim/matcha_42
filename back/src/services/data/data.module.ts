import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/frameworks/auth/auth.module';
import { FriendsModule } from '../use-cases/friends/friends.module';
import { UserModule } from '../use-cases/user/user.module';
import { UserService } from '../use-cases/user/user.service';
import { DataService } from './data.service';

@Module({
  imports:[AuthModule, UserModule, FriendsModule],
  providers: [DataService],
})
export class DataModule {}

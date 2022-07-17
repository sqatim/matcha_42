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

@Module({
  imports: [MongoModule, UserModule, AuthModule, DataModule],
  controllers: [AppController, UsersController, ProfileController],
  providers: [AppService, DataService],
})
export class AppModule {}

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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [MongoModule, UserModule, AuthModule, DataModule, 
  //   ServeStaticModule.forRoot({
  //   serveRoot: join(__dirname, '..', 'upload')
  // })
],
  controllers: [AppController, UsersController, ProfileController],
  providers: [AppService, DataService],
})
export class AppModule {}

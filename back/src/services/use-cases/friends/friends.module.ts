import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendsSchema } from 'src/core/schema/friends.schema';
import { FriendsService } from './friends.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Friends', schema: FriendsSchema }])],
    providers: [FriendsService],
    exports: [FriendsService]
})
export class FriendsModule {}

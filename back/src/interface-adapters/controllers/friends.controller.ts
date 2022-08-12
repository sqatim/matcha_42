import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';

@Controller('friends')
export class FriendsController {
  constructor(private readonly dataService: DataService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async findMyFriends(@Req() req)
  {
    return this.dataService.findMyFriends(req.user.id);
  }

  @Post('me/addFriend/:friendId')
  @UseGuards(JwtAuthGuard)
  async addFriend(@Req() req, @Param('friendId') friendId) {
    await this.dataService.addFriendRequest(req.user.id, friendId);
  }

  @Post('me/acceptFriend/:friendId')
  @UseGuards(JwtAuthGuard)
  async acceptFriend(@Req() req, @Param('friendId') friendId) {
    await this.dataService.acceptFriendRequest(req.user.id, friendId);
  }

  @Delete('me/removeFriend/:friendId')
  @UseGuards(JwtAuthGuard)
  async removeFriend(@Req() req, @Param('friendId') friendId) {
    await this.dataService.removeFriend(req.user.id, friendId);
  }
}

import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly dataService: DataService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async retrieveMyConversation(@Req() req) {
    return await this.dataService.findMyConversations(req.user.id);
  }

  @Get('me/find/:conversationId')
  @UseGuards(JwtAuthGuard)
  async findConversationById(@Param('conversationId') conversationId) {
    return await this.dataService.findConversationById(conversationId);
  }

  @Get('find/me/friend/:friendId')
  @UseGuards(JwtAuthGuard)
  async findConversationWithMyFriend(@Req() req, @Param('friendId') friendId) {
    return await this.dataService.findConversationWithMyFriend(req.user.id, friendId);
  }

  @Post('me/create/:friendId')
  @UseGuards(JwtAuthGuard)
  async addFriend(@Req() req, @Param('friendId') friendId) {
    return await this.dataService.createNewConversation(req.user.id, friendId);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';

@Controller('message')
export class MessageController {
  constructor(private readonly dataService: DataService) {}

  @Post('me/newMessage/conversation/:ConversationId')
  @UseGuards(JwtAuthGuard)
  async sendNewMessage(
    @Req() req,
    @Body() body,
    @Param('ConversationId') conversationId,
    @Param('friendId') friendId,
  ) {
    return await this.dataService.sendNewMessage(
      req.user.id,
      body,
      conversationId,
    );
  }

  @Get('me/conversation/:ConversationId')
  @UseGuards(JwtAuthGuard)
  async getMessageOfConversation(
    @Param('ConversationId') conversationId,
    @Query() query,
  ) {
    return await this.dataService.getMessageOfConversation(
      conversationId,
      query,
    );
  }
}

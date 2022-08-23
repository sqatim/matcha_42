import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';

@Controller('notification')
export class NotificationController {
    constructor(
        private readonly dataService: DataService
    ){}

    @Get('me')
    @UseGuards(JwtAuthGuard)
    async getMyNotifications(@Req()req)
    {
        return await this.dataService.getMyNotificationsAndUpdate(req.user.id);
    }
}

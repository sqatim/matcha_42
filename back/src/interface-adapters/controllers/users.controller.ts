import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';
import { UserService } from 'src/services/use-cases/user/user.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly dataSerice: DataService,
    private readonly userService: UserService,
  ) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async findMyData(@Req() req) {
    return await this.dataSerice.loginWithJwt(req.user.id)
  }
  @Get(':id')
  async findUserData(@Param('id') id: string) {
  }
}

import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckUserDto, CreateUserDto } from './core/dto/User.dto';
import { GoogleAuthGuard } from './frameworks/auth/google/google-auth.guard';
import { DataService } from './services/data/data.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataService: DataService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/auth/google/redirect')
  @UseGuards(GoogleAuthGuard)
  justForTry1(@Req() req, @Res() res) {
    const token = this.dataService.login(req.user);
    res.redirect(`http://localhost:3000/loginSuccess?token=${token}`);
  }
  @Get('/auth')
  @UseGuards(GoogleAuthGuard)
  justForTry() {
    return 'hello world';
  }

  @Post('register')
  registernewUser(@Body() body: CreateUserDto)
  {
    return (this.dataService.createNewUser(body));
  }

  @Post('login')
  login(@Body() body: CheckUserDto)
  {
    return (this.dataService.signIn(body));
  }
}

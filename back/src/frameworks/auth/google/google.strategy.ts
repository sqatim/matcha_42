import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { CreateUserDto } from 'src/core/dto/User.dto';
import { DataService } from 'src/services/data/data.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly dataService: DataService) {
    super({
      clientID:
        '602931414856-q4eauolir178mrg2q10osc4a5kbmkk3k.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/auth/google/redirect',
      scope: ['email'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    cb: VerifyCallback,
  ) {
    let user: any | CreateUserDto = {
      id: profile.id,
      email: profile._json.email,
      avatar: profile._json.picture,
    };
    user = await this.dataService.createNewUser(user);
    return user;
  }
}

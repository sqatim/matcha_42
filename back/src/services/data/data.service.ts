import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CheckUserDto, CreateUserDto } from 'src/core/dto/User.dto';
import { UserService } from '../use-cases/user/user.service';

@Injectable()
export class DataService {
  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
  ) {}

  login(user) {
    const payload = { email: user.email, sub: user.id };
    console.log('id: ', user.id);
    return this.jwtService.sign(payload);
  }

  async createNewUser(newUser: CreateUserDto) {
    let user: any = await this.userService.findDuplicateUser(newUser);
    console.log(user);
    if (user) {
      if (newUser.username == user.username)
        return {
          state: 'failed',
          data: 'username',
        };
      else
        return {
          state: 'failed',
          data: 'email',
        };
    }
    user = await this.userService.create(newUser);
    return {
      state: 'success',
      user,
    };
  }

  async signIn(newUser: CheckUserDto) {
    let user: any = await this.userService.findUserByUsername(newUser.username);
    if (user) {
      if (user.password == newUser.password) {
        const jwt = this.login(user);
        console.log('jwt: ', jwt);
        return {
          state: 'success',
          user,
          jwt,
        };
      }
    }
    return {
      state: 'failed',
    };
  }

  async completeProfile(body, file, id: string) {
    const user = await this.userService.findUserByid(id);
    let photos = [];
    file.map((element) => photos.push(element.filename));
    Object.assign(user, body);
    Object.assign(user, { photos });
    Object.assign(user, { profileCompleted: true });
    user.save();
    console.log(user);
    return user;
  }

  async findMyData(id) {
    const user = await this.userService.findMyProfileByid(id);
    console.log(user);
    return user;
  }
}

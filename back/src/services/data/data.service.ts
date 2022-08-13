import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CheckUserDto, CreateUserDto } from 'src/core/dto/User.dto';
import { FriendsService } from '../use-cases/friends/friends.service';
import { UserService } from '../use-cases/user/user.service';

@Injectable()
export class DataService {
  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
    private friendService: FriendsService,
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
    let position = [];
    file.map((element) => photos.push(element.filename));
    console.log(body);
    body.position.map((element) => position.push(element));
    Object.assign(user, body);
    Object.assign(user, { photos });
    Object.assign(user, { position });
    Object.assign(user, { profileCompleted: true });
    user.save();
    return user;
  }

  async findMyData(id) {
    const user = await this.userService.findMyProfileByid(id);
    return user;
  }

  async firstTimeLogged(id) {
    const user = await this.userService.findMyProfileByid(id);
    Object.assign(user, { firstTimeLogged: false });
    user.save();
    return {
      state: 'success',
      user,
    };
  }

  async changeAvatar(id, avatar) {
    const user = await this.userService.findMyProfileByid(id);
    Object.assign(user, { avatar: avatar, firstTimeLogged: false });
    user.save();
    return {
      state: 'success',
      user,
    };
  }

  async addPhotos(id, files) {
    const user = await this.userService.findMyProfileByid(id);
    let photos = user.photos;
    files.map((element) => photos.push(element.filename));
    console.log(photos);
    Object.assign(user, { photos });
    user.save();
    return {
      state: 'success',
      photos,
    };
  }
  async updateData(id, body) {
    const user = await this.userService.findMyProfileByid(id);
    if (Object.keys(body).length === 0) {
      return {
        state: 'Not updated',
      };
    }

    for (const [key, value] of Object.entries(body)) {
      if (
        key == 'firstname' ||
        key == 'lastname' ||
        key == 'username' ||
        key == 'gender' ||
        key == 'lookingFor' ||
        key == 'biography' ||
        key == 'tags'
      )
        Object.assign(user, { [key]: value });
    }
    user.save();
    return {
      state: 'Updated',
      user: body,
    };
  }

  async updateRating(id, body) {
    const user = await this.userService.findMyProfileByid(id);

    Object.assign(user, { rating: 2.5 });
    user.save();
    return {
      state: 'Updated',
      user: user,
    };
  }
  async updatePosition(id, body) {
    const user = await this.userService.findMyProfileByid(id);

    Object.assign(user, {
      position: body.position,
      positionSelected: body.positionSelected,
    });
    console.log(body);
    user.save();
    return {
      state: 'Updated',
      user: user,
    };
  }

  async removePhoto(id, photoId) {
    const user = await this.userService.findMyPhotosProfileByid(id);
    console.log(user.photos);
    const photos = user.photos.filter((element) => element != photoId);
    Object.assign(user, { photos });
    user.save();
    return user;
  }

  // Friends
  async addFriendRequest(myId, friendId) {
    const myDocument = await this.friendService.sendRequest(myId, friendId);
    const friendDocument = await this.friendService.pendingRequest(
      friendId,
      myId,
    );
    console.log(myDocument)
    console.log(friendDocument)
    await this.userService.updateFriendRequest(myId, myDocument);
    await this.userService.updateFriendRequest(friendId, friendDocument);
  }

  async acceptFriendRequest(myId, friendId) {
    await this.friendService.acceptFriendRequest(myId, friendId);
    await this.friendService.acceptFriendRequest(friendId, myId);
  }

  async removeFriend(myId, friendId) {
    const myDocument = await this.friendService.removeFriend(myId, friendId);
    const friendDocument = await this.friendService.removeFriend(
      friendId,
      myId,
    );
    await this.userService.updateRemoveFriend(myId, myDocument);
    await this.userService.updateRemoveFriend(friendId, friendDocument);
  }

  async findMyFriends(id, query)
  {
    return await this.friendService.findMyFriends(id, query);
  }

}

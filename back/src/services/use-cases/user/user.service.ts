import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/core/dto/User.dto';
import { UserDocument } from 'src/core/schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }
  async findUserByUsername(newUsername: string) {
    return await this.userModel.findOne({ username: newUsername }).exec();
  }

  async findUserByid(id: string) {
    return await this.userModel.findById(id).exec();
  }
  async findMyProfileByid(id: string) {
    return await this.userModel.findById(id, '-password').exec();
  }
  async findMyPhotosProfileByid(id: string) {
    return await this.userModel.findById(id).select('photos').exec();
  }
  async findDuplicateUser(user: CreateUserDto) {
    return await this.userModel
      .findOne({ $or: [{ username: user.username }, { email: user.email }] })
      .exec();
  }
}

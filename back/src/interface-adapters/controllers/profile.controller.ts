import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';
import { saveImageToStorage } from 'src/services/helpers/image-storage';
import { UserService } from 'src/services/use-cases/user/user.service';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly dataService: DataService,
  ) {}
  @Get()
  findAll() {
    return 'This action returns all cats';
  }

  @Post('/completeProfile')
  @UseInterceptors(FilesInterceptor('file', 5, saveImageToStorage))
  @UseGuards(JwtAuthGuard)
  completeProfile(
    @Body() body,
    @Req() req,
    @UploadedFiles() file: Array<Express.Multer.File>,
  ) {
    return this.dataService.completeProfile(body, file, req.user.id);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async FindMyProfile(@Req() req) {
    console.log(req.user);
    // return await this.dataService.findMyData('62d87eb9d59303f818934af9');
    return await this.dataService.findMyData(req.user.id);
  }

  @Get(':username')
  @UseGuards(JwtAuthGuard)
  async FindUserProfile(@Param('username') username) {
    return await this.dataService.findUserData(username); // TODO hadi khasni n9adha 
  }

  @Put('me/firstTimeLogged')
  @UseGuards(JwtAuthGuard)
  async firstTimeLogged(@Req() req) {
    return await this.dataService.firstTimeLogged(req.user.id);
  }

  @Post('me/photos')
  @UseInterceptors(FilesInterceptor('file', 5, saveImageToStorage))
  @UseGuards(JwtAuthGuard)
  async addPhotos(
    @Req() req,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return await this.dataService.addPhotos(req.user.id, files);
  }
  @Put('me/Avatar')
  @UseGuards(JwtAuthGuard)
  async changeAvatar(@Req() req, @Body() body) {
    return await this.dataService.changeAvatar(req.user.id, body.avatar);
  }
  @Put('me/informations')
  @UseGuards(JwtAuthGuard)
  async changeInformations(@Req() req, @Body() body) {
    return await this.dataService.updateData(req.user.id, body);
  }

  @Put('me/rating')
  @UseGuards(JwtAuthGuard)
  async changerating(@Req() req, @Body() body) {
    return await this.dataService.updateRating(req.user.id, body);
  }
  @Put('me/position')
  @UseGuards(JwtAuthGuard)
  async changePosition(@Req() req, @Body() body) {
    return await this.dataService.updatePosition(req.user.id, body);
  }

  @Delete('me/photos/:photoId')
  @UseGuards(JwtAuthGuard)
  async removePhoto(@Req() req, @Param('photoId') photoId: string) {
    return await this.dataService.removePhoto(req.user.id, photoId);
  }
}

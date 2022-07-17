import { Body, Controller, Get, Post, Req, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';
import { saveImageToStorage } from 'src/services/helpers/image-storage';
import { UserService } from 'src/services/use-cases/user/user.service';

@Controller('profile')
export class ProfileController {
    constructor(
        private readonly dataService: DataService,
        private readonly userService: UserService
    ) {}
    @Get()
    findAll() {
        return 'This action returns all cats';
    }

    @Post('/completeProfile')
    @UseInterceptors(FilesInterceptor('file', 5, saveImageToStorage))
    @UseGuards(JwtAuthGuard)
    completeProfile(@Body() body, @Req() req, @UploadedFiles() file: Array<Express.Multer.File>) {
        console.log(file);
        return this.dataService.completeProfile(body, req.user.id);
    }
}

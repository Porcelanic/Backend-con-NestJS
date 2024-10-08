import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from '../servicios/upload.services';
import { imageFileFilter } from '../dto/upload.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guards';
import { Rol } from 'src/auth/guards/rol.decorator';

@UseGuards(JwtAuthGuard, RolGuard)
@Rol('Administrador','Artista')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('estampado')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: imageFileFilter,
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File,): Promise<{ filePath: string }> {
    try {
      const filePath = await this.uploadService.saveFile(file);
      return { filePath };
    } catch (error) {
      throw new HttpException('Failed to upload file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('camiseta/:tipo')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: imageFileFilter,
  }))
  async uploadCamiseta(@UploadedFile() file: Express.Multer.File, @Param('tipo') tipo:string): Promise<{ filePath: string }> {
    try {
      const filePath = await this.uploadService.saveCamiseta(file,tipo);
      return { filePath };
    } catch (error) {
      throw new HttpException('Failed to upload file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
import { AuthService } from '../servicios/auth.services';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { crearLoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: crearLoginDto) {
    return this.AuthService.login(data);
  }
}

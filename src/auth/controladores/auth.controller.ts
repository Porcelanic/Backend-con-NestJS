import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { crearLoginDto } from '../dto/login.dto';
import { AuthService } from '../servicios/auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    
  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() payload: crearLoginDto) {
    return this.authService.login(payload.correo, payload.password);
  }
  
}

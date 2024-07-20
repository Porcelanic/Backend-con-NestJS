import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { usuarioService } from 'src/usuario/servicios/usuario.services';
import { actualizarUsuarioDto, crearUsuarioDto } from '../dto/usuario.dto';
import { crearLoginDto } from '../../auth/dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/guards/roles.decorator';


@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuario')
@ApiTags('Usuario')
export class UsuarioController {
  constructor(private usuarioService: usuarioService) {}

 

  @Get('prueba')
  @Roles('Administrador','Empleado', 'Cliente')
  findAll(): string {
    return  this.usuarioService.prueba();
  }

  @Post('crearUsuario')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiBody({ type: crearUsuarioDto }) // Especifica el tipo del cuerpo esperado
  @ApiResponse({ status: 201, description: 'Usuario creado con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de usuario inválidos' })
  async crearUsuario(@Body() data: crearUsuarioDto) {
    return await this.usuarioService.crearUsuario(data);
  }

  @Get('consultarUsuario')
  async consultarUsuario(){
    return await this.usuarioService.consultarTodos();
  }

  @Put('actualizarUsuario/:cedula')
  @UsePipes(new ValidationPipe())
  async actualizarUsuario(@Param('cedula', ParseIntPipe) cedula: string, @Body() data: actualizarUsuarioDto) {
    return await this.usuarioService.actualizarUsuario(cedula, data);
  }

  @Delete('eliminarUsuario/:cedula')
  @UsePipes(new ValidationPipe())
  async eliminarUsuario(@Param('cedula', ParseIntPipe) cedula: string) {
    return await this.usuarioService.eliminarUsuario(cedula);
  }



  @Get('consultarUsuarioCedula/:cedula')
  async consultarUsuarioCedula(@Param('cedula', ParseIntPipe) cedula: string){
    return await this.usuarioService.consultarTodosCedula(cedula);
  }

  
  


}
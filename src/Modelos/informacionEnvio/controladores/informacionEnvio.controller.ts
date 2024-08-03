import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { informacionEnvioService } from '../servicios/informacionEnvio.services';
import { actualizarInformacionEnvioDto, crearInformacionEnvioDto } from '../dto/informacionEnvio.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Rol } from 'src/auth/guards/rol.decorator';
import { RolGuard } from 'src/auth/guards/rol.guards';

@UseGuards(JwtAuthGuard, RolGuard)
@Rol('Cliente','Administrador')
@Controller('informacionEnvio')
export class InformacionEnvioController {
  constructor(private informacionEnvioService: informacionEnvioService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.informacionEnvioService.prueba();
  }

  @Rol('Cliente')
  @Post('crearInformacionEnvio')
  @UsePipes(new ValidationPipe())
  async crearInformacionEnvio(@Body() data: crearInformacionEnvioDto) {
    return await this.informacionEnvioService.crearInformacionEnvio(data);
  }

  @Rol('Administrador')
  @Get('consultarInformacionEnvio')
  async consultarTodos(){
    return await this.informacionEnvioService.consultarTodos();
  }

  @Rol('Administrador')
  @Get('consultarInformacionEnvio/:id')
  async consultarUno(@Param('id', ParseIntPipe) id: number){
    return await this.informacionEnvioService.consultarUno(id);
  }

  @Rol('Administrador','Cliente')
  @Get('consultarClienteEmail/:usuarioEmail')
  async consultarNombre(@Param('usuarioEmail') usuarioEmail: string){
    return await this.informacionEnvioService.consultarInformacionEnvio(usuarioEmail);
  }

  @Rol('Cliente')
  @Put('actualizarInformacionEnvio/:id')
  @UsePipes(new ValidationPipe())
  async actualizarInformacionEnvio(@Param('id') id: number, @Body() data: actualizarInformacionEnvioDto) {
    return await this.informacionEnvioService.actualizarInformacionEnvio(id, data);
  }

  @Rol('Cliente')
  @Delete('eliminarInformacionEnvio/:id')
  @UsePipes(new ValidationPipe())
  async eliminarInformacionEnvio(@Param('id') id: number) {
    return await this.informacionEnvioService.eliminarInformacionEnvio(id);
  }

}
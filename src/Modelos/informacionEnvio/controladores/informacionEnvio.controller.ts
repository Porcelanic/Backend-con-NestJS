import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { informacionEnvioService } from '../servicios/informacionEnvio.services';
import { actualizarInformacionEnvioDto, crearInformacionEnvioDto } from '../dto/informacionEnvio.dto';



@Controller('informacionEnvio')
export class InformacionEnvioController {
  constructor(private informacionEnvioService: informacionEnvioService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.informacionEnvioService.prueba();
  }

  @Post('crearInformacionEnvio')
  @UsePipes(new ValidationPipe())
  async crearInformacionEnvio(@Body() data: crearInformacionEnvioDto) {
    return await this.informacionEnvioService.crearInformacionEnvio(data);
  }

  @Get('consultarInformacionEnvio')
  async consultarTodos(){
    return await this.informacionEnvioService.consultarTodos();
  }

  @Get('consultarInformacionEnvio/:id')
  async consultarUno(@Param('id', ParseIntPipe) id: number){
    return await this.informacionEnvioService.consultarUno(id);
  }

  @Get('consultarClienteEmail/:usuarioEmail')
  async consultarNombre(@Param('usuarioEmail') usuarioEmail: string){
    return await this.informacionEnvioService.consultarInformacionEnvio(usuarioEmail);
  }

  @Put('actualizarInformacionEnvio/:id')
  @UsePipes(new ValidationPipe())
  async actualizarInformacionEnvio(@Param('id') id: number, @Body() data: actualizarInformacionEnvioDto) {
    return await this.informacionEnvioService.actualizarInformacionEnvio(id, data);
  }

  @Delete('eliminarInformacionEnvio/:id')
  @UsePipes(new ValidationPipe())
  async eliminarInformacionEnvio(@Param('id') id: number) {
    return await this.informacionEnvioService.eliminarInformacionEnvio(id);
  }

}
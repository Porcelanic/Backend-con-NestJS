import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { artistaService } from '../servicios/artista.services';
import { actualizarArtistaDto, crearArtistaDto } from '../dto/artista.dto';
import { crearLoginDto } from '../dto/login.dto';



@Controller('artista')
export class ArtistaController {
  constructor(private artistaService: artistaService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.artistaService.prueba();
  }

  @Post('crearArtista')
  @UsePipes(new ValidationPipe())
  async crearArtista(@Body() data: crearArtistaDto) {
    return await this.artistaService.crearArtista(data);
  }

  @Get('consultarArtista')
  async consultarArtista(){
    return await this.artistaService.consultarTodos();
  }

  @Get('consultarCorreo/:correo')
  async consultarCorreo(@Param('correo') correo: string){
    return await this.artistaService.consultarCorreo(correo);
  }

  @Put('actualizarArtista/:correo')
  @UsePipes(new ValidationPipe())
  async actualizarArtista(@Param('correo') correo: string, @Body() data: actualizarArtistaDto) {
    return await this.artistaService.actualizarArtista(correo, data);
  }

  @Delete('eliminarArtista/:correo')
  @UsePipes(new ValidationPipe())
  async eliminarArtista(@Param('correo') correo: string) {
    return await this.artistaService.eliminarArtista(correo);
  }


  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: crearLoginDto) {
    return this.artistaService.login(data);
  }  

}
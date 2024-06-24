import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { camisaService } from '../servicios/camisa.services';
import { actualizarCamisaDto, crearCamisaDto } from '../dto/camisa.dto';



@Controller('camisa')
export class camisaController {
  constructor(private camisaService: camisaService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.camisaService.prueba();
  }

  @Post('crearCamisa')
  @UsePipes(new ValidationPipe())
  async crearCamisa(@Body() data: crearCamisaDto) {
    return await this.camisaService.crearCamisa(data);
  }

  @Get('consultarCamisa')
  async consultarCamisa(){
    return await this.camisaService.consultarTodos();
  }

  @Get('consultarCamisaMarca/:marca')
  async consultarCamisaMarca(@Param('marca', ParseIntPipe)  marca: string){
    return await this.camisaService.consultarTodosMarca(marca);
  }
  


}
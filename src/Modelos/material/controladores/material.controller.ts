import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { materialService } from '../servicios/material.services';
import { actualizarMaterialDto, crearMaterialDto } from '../dto/material.dto';



@Controller('material')
export class MaterialController {
  constructor(private materialService: materialService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.materialService.prueba();
  }

  @Post('crearMaterial')
  @UsePipes(new ValidationPipe())
  async crearMaterial(@Body() data: crearMaterialDto) {
    return await this.materialService.crearMaterial(data);
  }

  @Get('consultarMaterial')
  async consultarMaterial(){
    return await this.materialService.consultarTodos();
  }

  @Get('consultarNombre/:nombre')
  async consultarNombre(@Param('nombre') nombre: string){
    return await this.materialService.consultarMaterial(nombre);
  }

  @Put('actualizarMaterial/:nombre')
  @UsePipes(new ValidationPipe())
  async actualizarMaterial(@Param('nombre') nombre: string, @Body() data: actualizarMaterialDto) {
    return await this.materialService.actualizarMaterial(nombre, data);
  }

  @Delete('eliminarMaterial/:nombre')
  @UsePipes(new ValidationPipe())
  async eliminarMaterial(@Param('nombre') nombre: string) {
    return await this.materialService.eliminarMaterial(nombre);
  }

}
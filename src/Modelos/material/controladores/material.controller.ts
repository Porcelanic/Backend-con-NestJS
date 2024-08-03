import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { materialService } from '../servicios/material.services';
import { actualizarMaterialDto, crearMaterialDto } from '../dto/material.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Rol } from 'src/auth/guards/rol.decorator';
import { RolGuard } from 'src/auth/guards/rol.guards';


@UseGuards(JwtAuthGuard, RolGuard)
@Controller('material')
export class MaterialController {
  constructor(private materialService: materialService) {}

  
  @Get('prueba')
  findAll(): string {
    return  this.materialService.prueba();
  }

  @Rol('Administrador')
  @Post('crearMaterial')
  @UsePipes(new ValidationPipe())
  async crearMaterial(@Body() data: crearMaterialDto) {
    return await this.materialService.crearMaterial(data);
  }

  @Rol('Cliente','Administrador')
  @Get('consultarMaterial')
  async consultarTodos(){
    return await this.materialService.consultarTodos();
  }

  @Rol('Cliente','Administrador')
  @Get('consultarMaterial/:Material')
  async consultarUno(@Param('Material') Material: string){
    return await this.materialService.consultarUno(Material);
  }

  @Rol('Cliente','Administrador')
  @Put('actualizarMaterial/:Material')
  @UsePipes(new ValidationPipe())
  async actualizarMaterial(@Param('Material') Material: string, @Body() data: actualizarMaterialDto) {
    return await this.materialService.actualizarMaterial(Material, data);
  }

  @Rol('Administrador')
  @Delete('eliminarMaterial/:Material')
  @UsePipes(new ValidationPipe())
  async eliminarMaterial(@Param('Material') Material: string) {
    return await this.materialService.eliminarMaterial(Material);
  }

}
import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { pedidoService } from '../servicios/pedido.services';
import { actualizarPedidoDto, crearPedidoDto } from '../dto/pedido.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Rol } from 'src/auth/guards/rol.decorator';
import { RolGuard } from 'src/auth/guards/rol.guards';


@UseGuards(JwtAuthGuard, RolGuard)
@Controller('pedido')
export class PedidoController {
  constructor(private pedidoService: pedidoService) {}

  @Get('prueba')
  findAll(): string {
    return  this.pedidoService.prueba();
  }

  @Rol('Cliente')
  @Post('crearPedido')
  @UsePipes(new ValidationPipe())
  async crearPedido(@Body() data: crearPedidoDto) {
    return await this.pedidoService.crearPedido(data);
  }

  @Rol('Administrador')
  @Get('consultarPedido')
  async consultarTodos(){
    return await this.pedidoService.consultarTodos();
  }

  @Rol('Administrador')
  @Get('consultarPedido/:numeroPedido')
  async consultarUno(@Param('numeroPedido') numeroPedido: string){
    return await this.pedidoService.consultarUno(numeroPedido);
  }

  @Rol('Cliente')
  @Put('actualizarPedido/:numeroPedido')
  @UsePipes(new ValidationPipe())
  async actualizarPedido(@Param('numeroPedido') numeroPedido: number, @Body() data: actualizarPedidoDto) {
    return await this.pedidoService.actualizarPedido(numeroPedido, data);
  }

  @Rol('Administrador')
  @Delete('eliminarPedido/:numeroPedido')
  @UsePipes(new ValidationPipe())
  async eliminarPedido(@Param('numeroPedido') numeroPedido: number) {
    return await this.pedidoService.eliminarPedido(numeroPedido);
  }

}
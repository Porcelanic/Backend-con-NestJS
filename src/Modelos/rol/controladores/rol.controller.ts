import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolService } from '../servicios/rol.service';
import { crearRolDto, actualizarRolDto } from '../dto/rol.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Rol } from 'src/auth/guards/rol.decorator';
import { RolGuard } from 'src/auth/guards/rol.guards';

@UseGuards(JwtAuthGuard, RolGuard)
@Rol('Administrador')
@Controller('rol')
export class RolController {
    constructor( private rolService: RolService) {}

    @Post('crearRol')
    @UsePipes(new ValidationPipe())
    async crearRol(@Body() data: crearRolDto) {
        return await this.rolService.crearRol(data);
    }

    @Get('consultarRol')
    async consultarTodos() {
        return await this.rolService.consultarTodos();
    }

    @Get('consultarRol/:id')
    async consultarUno(@Param('id') id: number){
        return await this.rolService.consultarUno(id);
    }

    @Put('actualizarRol/:id')
    async actulizarRol(@Param('id') id: number, @Body() data: actualizarRolDto) {
        return await this.rolService.actualizarRol(id, data);
    }

    @Delete('eliminarRol/:id')
    async eliminarRol(@Param('id') id: number) {
        return await this.rolService.eliminarRol(id);
    }


}

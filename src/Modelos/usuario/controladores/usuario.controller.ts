import { UsuarioService } from '../servicios/usuario.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { crearUsuarioDto, actualizarUsuarioDto } from '../dto/usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guards';
import { Rol } from 'src/auth/guards/rol.decorator';

@Controller('usuario')
export class UsuarioController {
    constructor ( private usuarioService: UsuarioService ){}
    @Post('crearUsuario')
    @UsePipes(new ValidationPipe())
    async crearUsuario(@Body() data: crearUsuarioDto){
        return await this.usuarioService.crearUsuario(data);
    }

    @UseGuards(JwtAuthGuard, RolGuard)
    @Rol('Administrador')
    @Get('consultarUsuario')
    async consultarTodos(){
        return await this.usuarioService.consultarTodos();
    }

    @UseGuards(JwtAuthGuard, RolGuard)
    @Rol('Administrador')
    @Get('consultarUsuario/:email')
    async consultarUno(@Param('email') email: string){
        return await this.usuarioService.consultarUno(email);
    }

    @UseGuards(JwtAuthGuard, RolGuard)
    @Put('actualizarUsuario/:email')
    @UsePipes(new ValidationPipe())
    async actualizarUsuario(@Param('email') email: string, @Body() data: actualizarUsuarioDto){
        return await this.usuarioService.actualizarUsuario(email, data);
    }

    @UseGuards(JwtAuthGuard, RolGuard)
    @Delete('eliminarUsuario/:email')
    async eliminarUsuario(@Param('email') email: string){
        return await this.usuarioService.eliminarUsuario(email);
    }

}

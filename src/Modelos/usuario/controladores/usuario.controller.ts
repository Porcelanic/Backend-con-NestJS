import { UsuarioService } from '../servicios/usuario.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { crearUsuarioDto, actualizarUsuarioDto } from '../dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor ( private usuarioService: UsuarioService ){}

    @Post('crearUsuario')
    @UsePipes(new ValidationPipe())
    async crearUsuario(@Body() data: crearUsuarioDto){
        return await this.usuarioService.crearUsuario(data);
    }

    @Get('consultarUsuario')
    async consultarTodos(){
        return await this.usuarioService.consultarTodos();
    }

    @Get('consultarUsuario/:email')
    async consultarUno(@Param('email') email: string){
        return await this.usuarioService.consultarUno(email);
    }

    @Put('actualizarUsuario/:email')
    @UsePipes(new ValidationPipe())
    async actualizarUsuario(@Param('email') email: string, @Body() data: actualizarUsuarioDto){
        return await this.usuarioService.actualizarUsuario(email, data);
    }

    @Delete('eliminarUsuario/:email')
    async eliminarUsuario(@Param('email') email: string){
        return await this.usuarioService.eliminarUsuario(email);
    }

}

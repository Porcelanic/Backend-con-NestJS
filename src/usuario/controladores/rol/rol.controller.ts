import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { crearRolDto } from 'src/usuario/dto/rol.dto';
import { RolService } from 'src/usuario/servicios/rol/rol.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('rol')
@ApiTags('Rol')
export class RolController {
    constructor(private rolService: RolService) {}

    @Post('crearRol')
    @ApiOperation({ summary: 'Crear un nuevo rol' })
    @ApiBody({ type: crearRolDto }) // Especifica el tipo del cuerpo esperado
    @ApiResponse({ status: 201, description: 'Rol creado con éxito' })
    @ApiResponse({ status: 400, description: 'Rol de usuario inválidos' })
    @UsePipes(new ValidationPipe)
    async crearUsuario(@Body() data: crearRolDto) {
        return await this.rolService.crearRol(data);
    }

    @Get('consultarRoles')
    async consultarUsuario(){
        return await this.rolService.consultarTodos();
    }

    @Get('consultarRolId/:id')
    async consultarUsuarioCedula(@Param('id', ParseIntPipe) id: number){
        return await this.rolService.consultarTodosId(id);
    }


    // Agregar Controladores para Actualizar Rol y Eliminar Rol

}

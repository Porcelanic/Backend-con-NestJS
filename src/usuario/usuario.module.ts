import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from './entidades/usuario.entity';
import { UsuarioController } from './controladores/usuario.controller';
import { usuarioService } from './servicios/usuario.services';
import { Rol } from './entidades/rol.entity';
import { RolController } from './controladores/rol/rol.controller';
import { RolService } from './servicios/rol/rol.service';


@Module({
    imports: [TypeOrmModule.forFeature([usuario, Rol])],
    controllers:[UsuarioController, RolController],
    providers: [usuarioService, RolService],
    exports:[usuarioService, RolService]
  })

export class UsuarioModule {

}
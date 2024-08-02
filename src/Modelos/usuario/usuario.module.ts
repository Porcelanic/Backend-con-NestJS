import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from '../../database/Entidades/usuario.entity';
import { UsuarioController } from './controladores/usuario.controller';
import { UsuarioService } from './servicios/usuario.service';


@Module({
    imports: [TypeOrmModule.forFeature([usuario])],
    controllers:[UsuarioController],
    providers: [UsuarioService],
    exports:[UsuarioService]
  })

export class UsuarioModule {

}
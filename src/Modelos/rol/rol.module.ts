import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rol } from '../../database/Entidades/rol.entity';
import { RolController } from './controladores/rol.controller';
import { RolService } from './servicios/rol.service';


@Module({
    imports: [TypeOrmModule.forFeature([rol])],
    controllers:[RolController],
    providers: [RolService],
    exports:[RolService]
  })

export class RolModule {

}
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { rol } from 'src/database/Entidades/rol.entity';

export class crearUsuarioDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  rolId: number;
}

export class actualizarUsuarioDto extends PartialType(crearUsuarioDto) {}

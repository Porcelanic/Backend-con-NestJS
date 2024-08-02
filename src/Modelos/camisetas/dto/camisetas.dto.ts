import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class crearCamisetasDto {
  @IsNotEmpty()
  @IsString()
  diseño: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsString()
  usuarioEmail: string;
}

export class actualizarCamisetasDto extends PartialType(crearCamisetasDto) {}

export class identificadorCamisetasDto {
  @IsEmail()
  @IsString()
  usuarioEmail: string;
}

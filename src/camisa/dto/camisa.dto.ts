import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

function stringToDate({ value }: TransformFnParams) {
  return new Date(value);
}


export class crearCamisaDto {
  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  talla: string;

  @IsNotEmpty()
  @IsString()
  tela: string;

  @IsNotEmpty()
  @IsString()
  marca: string;

}

export class actualizarCamisaDto extends PartialType(crearCamisaDto) {}
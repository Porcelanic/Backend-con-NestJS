import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';

export class crearRolDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;
}

export class actualizarRolDto extends PartialType(crearRolDto) {}
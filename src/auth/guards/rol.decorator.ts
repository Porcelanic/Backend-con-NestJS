import { SetMetadata } from '@nestjs/common';

export const Rol = (...rol: string[]) => SetMetadata('rol', rol);
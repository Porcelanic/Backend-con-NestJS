import { Rol } from './rol.entity';
export declare class usuario {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    telefono: string;
    correo: string;
    direccion: string;
    password: string;
    fk_rol_user: Rol;
}

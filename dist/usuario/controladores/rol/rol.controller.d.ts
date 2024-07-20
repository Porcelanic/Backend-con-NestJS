import { crearRolDto } from 'src/usuario/dto/rol.dto';
import { RolService } from 'src/usuario/servicios/rol/rol.service';
export declare class RolController {
    private rolService;
    constructor(rolService: RolService);
    crearUsuario(data: crearRolDto): Promise<{
        statusCode: number;
        message: string;
        response?: undefined;
    } | {
        statusCode: number;
        message: string;
        response: import("../../entidades/rol.entity").Rol;
    }>;
    consultarUsuario(): Promise<import("../../entidades/rol.entity").Rol[]>;
    consultarUsuarioCedula(id: number): Promise<import("../../entidades/rol.entity").Rol>;
}

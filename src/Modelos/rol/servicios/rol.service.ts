import { Injectable } from '@nestjs/common';
import { crearRolDto, actualizarRolDto } from '../dto/rol.dto';
import { rol } from 'src/database/Entidades/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(rol)
    private rolRepo: Repository<rol>,
  ) {}

  async crearRol(data: crearRolDto) {
    try {
      const user = await this.rolRepo.find({
        where: [{ nombre: data.nombre }],
      });

      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Rol ya creado',
        };
      } else {
        const nuevoRol = this.rolRepo.create(data);
        return {
          statusCode: 201,
          message: 'Rol creado',
          response: await this.rolRepo.save(nuevoRol),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async consultarTodos() {
    const roles = await this.rolRepo.find();
    if (roles.length > 0) {
      return roles;
    } else {
      return {
        statusCode: 200,
        message: 'No hay roles',
      };
    }
  }

  async consultarUno(id) {
    const rol = await this.rolRepo.findOne({ where: [{ id: id }] });
    if (rol) {
      return rol;
    } else {
      return {
        statusCode: 404,
        message: 'Rol no encontrado',
      };
    }
  }

  async actualizarRol(id: number, data: actualizarRolDto) {
    try {
      const rol = await this.rolRepo.findOne({
        where: [{ id: id }],
      });

      if (rol) {
        await this.rolRepo.merge(rol, data);
        return {
          statusCode: 200,
          message: 'Rol actualizado',
          response: await this.rolRepo.save(rol),
        };
      } else {
        return {
          statusCode: 404,
          message: 'Rol no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async eliminarRol(id) {
    try {
      const rol = await this.rolRepo.findOne({
        where: [{ id: id }],
      });

      if (rol) {
        await this.rolRepo.delete(rol);
        return {
          statusCode: 200,
          message: 'Rol eliminado',
        };
      } else {
        return {
          statusCode: 404,
          message: 'Rol no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usuario } from 'src/database/Entidades/usuario.entity';
import { Repository } from 'typeorm';
import { crearUsuarioDto, actualizarUsuarioDto } from '../dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(usuario)
    private usuarioRepo: Repository<usuario>,
  ) {}

  async crearUsuario(data: crearUsuarioDto) {
    try {
      const user = await this.usuarioRepo.find({
        where: [{ email: data.email }],
      });

      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Usuario ya creado',
        };
      } else {
        const nuevoUsuario = this.usuarioRepo.create(data);
        return {
          statusCode: 201,
          message: 'Usuario creado',
          response: await this.usuarioRepo.save(nuevoUsuario),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async consultarTodos() {
    const usuarios = this.usuarioRepo.find({
      relations: ['fk_rol_user'],
    });
    if ((await usuarios).length > 0) {
      return usuarios;
    } else {
      return {
        statusCode: 200,
        message: 'No hay usuarios',
      };
    }
  }

  async consultarUno(email: string) {
    const usuario = await this.usuarioRepo.findOne({
      where: [{ email: email }],
    });
    if (usuario) {
      return usuario;
    } else {
      return {
        statusCode: 404,
        message: 'Usuario no encontrado',
      };
    }
  }

  async actualizarUsuario(email: string, data: actualizarUsuarioDto) {
    try {
      const usuario = await this.usuarioRepo.findOne({
        where: [{ email: email }],
      });
      if (usuario) {
        await this.usuarioRepo.merge(usuario, data);
        return {
          statusCode: 200,
          message: 'Usuario actualizado',
        };
      } else {
        return {
          statusCode: 404,
          message: 'Usuario no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async eliminarUsuario(email: string) {
    try {
      const usuario = await this.usuarioRepo.findOne({
        where: [{ email: email }],
      });
      if (usuario) {
        await this.usuarioRepo.delete(usuario);
        return {
          statusCode: 200,
          message: 'Usuario eliminado',
        };
      } else {
        return {
          statusCode: 404,
          message: 'Usuario no encontrado',
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

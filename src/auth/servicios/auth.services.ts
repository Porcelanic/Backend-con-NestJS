import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { usuario } from 'src/database/Entidades/usuario.entity';
import { Repository } from 'typeorm';
import { crearLoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(usuario)
    private usuarioRepo: Repository<usuario>,
    private jwtService: JwtService,
  ) {}

  async login(data: crearLoginDto) {
    try {
      const user = await this.usuarioRepo.findOne({
        where: [{ email: data.email, password: data.password }],
        relations: ['fk_rol_user'],
      });
      if (user) {
        const payload = { email: user.email, rol: user.fk_rol_user.nombre };
        return {
          statusCode: 200,
          user: user,
          Response: true,
          token: this.jwtService.sign(payload),
        };
      } else {
        return {
          statusCode: 404,
          message: 'Usuario o contraseña incorrectos',
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

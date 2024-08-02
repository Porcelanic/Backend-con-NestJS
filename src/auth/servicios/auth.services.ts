import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { cliente } from 'src/database/Entidades/cliente.entity';
import { Repository } from 'typeorm';
import { crearLoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(cliente)
    private clienteRepo: Repository<cliente>,
    private jwtService: JwtService
  ) {}

  async login(data: crearLoginDto) {
    try {
      const user = await this.clienteRepo.find({
        where: [{ email: data.email, password: data.password }],
      });
      if (user.length == 0) {
        return {
          statusCode: 404,
          message: 'Cliente o contraseña incorrectos',
        };
      }
      const payload = { email: data.email };
      return {
        statusCode: 200,
        user: user,
        Response: true,
        token: this.jwtService.sign(payload)
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }
}

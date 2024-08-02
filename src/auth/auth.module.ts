import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controladores/auth.controller';
import { AuthService } from './servicios/auth.services';
import { JwtStrategy } from './estrategia/estrategia';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cliente } from 'src/database/Entidades/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([cliente]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

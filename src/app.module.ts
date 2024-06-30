import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './Modelos/usuario/usuario.module';
import { camisaModule } from './Modelos/camisa/camisa.module';
import { ClienteModule } from './Modelos/cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './config';
import { DatabaseModule } from './dataBase/database.module';
import { EstampadoModule } from './Modelos/estampado/estampado.module';
import { ArtistaModule } from './Modelos/artista/artista.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.dev.env',
      load: [config, ],
      isGlobal: true,
  
    }),
    DatabaseModule,
    UsuarioModule,
    camisaModule,
    ClienteModule,
    EstampadoModule,
    ArtistaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

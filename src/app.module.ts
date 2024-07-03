import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './Modelos/usuario/usuario.module';
import { ClienteModule } from './Modelos/cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './config';
import { DatabaseModule } from './dataBase/database.module';
import { EstampadoModule } from './Modelos/estampado/estampado.module';
import { ArtistaModule } from './Modelos/artista/artista.module';
import { MaterialModule } from './Modelos/material/material.module';
import { InformacionEnvioModule } from './Modelos/informacionEnvio/informacionEnvio.module';
import { PedidoModule } from './Modelos/pedido/material.module';
import { camisaModule } from './Modelos/camisa/camisa.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.dev.env',
      load: [config, ],
      isGlobal: true,
  
    }),
    DatabaseModule,
    UsuarioModule,
    ClienteModule,
    EstampadoModule,
    ArtistaModule,
    MaterialModule,
    InformacionEnvioModule,
    PedidoModule,
    camisaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

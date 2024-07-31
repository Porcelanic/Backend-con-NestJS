import config from './config';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { enviroments } from './enviroments';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './Modelos/cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './dataBase/database.module';
import { EstampadoModule } from './Modelos/estampado/estampado.module';
import { ArtistaModule } from './Modelos/artista/artista.module';
import { MaterialModule } from './Modelos/material/material.module';
import { InformacionEnvioModule } from './Modelos/informacionEnvio/informacionEnvio.module';
import { PedidoModule } from './Modelos/pedido/material.module';
import { camisaModule } from './Modelos/camisa/camisa.module';
import { UploadModule } from './Modelos/upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AdministradorModule } from './Modelos/administrador/administrador.module';
import { CamisetasModule } from './Modelos/camisetas/camisetas.module';
import { RolModule } from './Modelos/rol/rol.module';
import { UsuarioModule } from './Modelos/usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.dev.env',
      load: [config],
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'Uploads'), // path to the static files
      serveRoot: '/uploads', // route to serve the static files
    }),
    DatabaseModule,
    ClienteModule,
    CamisetasModule,
    EstampadoModule,
    ArtistaModule,
    MaterialModule,
    InformacionEnvioModule,
    PedidoModule,
    camisaModule,
    UploadModule,
    AdministradorModule,
    RolModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

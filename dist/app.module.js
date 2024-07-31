"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cliente_module_1 = require("./Modelos/cliente/cliente.module");
const config_1 = require("@nestjs/config");
const enviroments_1 = require("./enviroments");
const config_2 = require("./config");
const database_module_1 = require("./dataBase/database.module");
const estampado_module_1 = require("./Modelos/estampado/estampado.module");
const artista_module_1 = require("./Modelos/artista/artista.module");
const material_module_1 = require("./Modelos/material/material.module");
const informacionEnvio_module_1 = require("./Modelos/informacionEnvio/informacionEnvio.module");
const material_module_2 = require("./Modelos/pedido/material.module");
const camisa_module_1 = require("./Modelos/camisa/camisa.module");
const upload_module_1 = require("./Modelos/upload/upload.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const administrador_module_1 = require("./Modelos/administrador/administrador.module");
const camisetas_module_1 = require("./Modelos/camisetas/camisetas.module");
const usuario_module_1 = require("./Modelos/usuario/usuario.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.dev.env',
                load: [config_2.default],
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'Uploads'),
                serveRoot: '/uploads',
            }),
            database_module_1.DatabaseModule,
            cliente_module_1.ClienteModule,
            camisetas_module_1.CamisetasModule,
            estampado_module_1.EstampadoModule,
            artista_module_1.ArtistaModule,
            material_module_1.MaterialModule,
            informacionEnvio_module_1.InformacionEnvioModule,
            material_module_2.PedidoModule,
            camisa_module_1.camisaModule,
            upload_module_1.UploadModule,
            administrador_module_1.AdministradorModule,
            usuario_module_1.UsuarioModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
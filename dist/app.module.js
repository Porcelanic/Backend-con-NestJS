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
const usuario_module_1 = require("./Modelos/usuario/usuario.module");
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
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.dev.env',
                load: [config_2.default,],
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            usuario_module_1.UsuarioModule,
            cliente_module_1.ClienteModule,
            estampado_module_1.EstampadoModule,
            artista_module_1.ArtistaModule,
            material_module_1.MaterialModule,
            informacionEnvio_module_1.InformacionEnvioModule,
            material_module_2.PedidoModule,
            camisa_module_1.camisaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
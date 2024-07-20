"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolController = void 0;
const common_1 = require("@nestjs/common");
const rol_dto_1 = require("../../dto/rol.dto");
const rol_service_1 = require("../../servicios/rol/rol.service");
const swagger_1 = require("@nestjs/swagger");
let RolController = class RolController {
    constructor(rolService) {
        this.rolService = rolService;
    }
    async crearUsuario(data) {
        return await this.rolService.crearRol(data);
    }
    async consultarUsuario() {
        return await this.rolService.consultarTodos();
    }
    async consultarUsuarioCedula(id) {
        return await this.rolService.consultarTodosId(id);
    }
};
exports.RolController = RolController;
__decorate([
    (0, common_1.Post)('crearRol'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo rol' }),
    (0, swagger_1.ApiBody)({ type: rol_dto_1.crearRolDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Rol creado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Rol de usuario inválidos' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rol_dto_1.crearRolDto]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "crearUsuario", null);
__decorate([
    (0, common_1.Get)('consultarRoles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolController.prototype, "consultarUsuario", null);
__decorate([
    (0, common_1.Get)('consultarRolId/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "consultarUsuarioCedula", null);
exports.RolController = RolController = __decorate([
    (0, common_1.Controller)('rol'),
    (0, swagger_1.ApiTags)('Rol'),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolController);
//# sourceMappingURL=rol.controller.js.map
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { camisa } from '../../../database/Entidades/camisa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearCamisaDto, actualizarCamisaDto } from '../dto/camisa.dto';

@Injectable()
export class camisaService {
  constructor(
    @InjectRepository(camisa)
    private camisaRepo: Repository<camisa>,
  ) {}

  prueba(): string {
    return 'Mi primer servicio';
  }

  //Crear Camisa
  async crearCamisa(data: crearCamisaDto) {
    try {
      const nuevaCamisa = this.camisaRepo.create(data);
      return {
        statusCode: 201,
        message: 'Camisa creado',
        response: await this.camisaRepo.save(nuevaCamisa),
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async consultarTodos() {
    const camisas = await this.camisaRepo.find();
    if (camisas.length > 0) {
      return camisas;
    } else {
      return {
        statusCode: 200,
        message: 'No hay camisas',
      };
    }
  }

  //Consultar Camisa por id
  async consultarUno(id: number) {
    const camisa = await this.camisaRepo.findOne({ where: { idCamisa: id } });
    if (camisa) {
      return camisa;
    } else {
      return {
        statusCode: 404,
        message: 'Camisa no encontrada',
      };
    }
  }
}

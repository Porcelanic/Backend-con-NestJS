import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { usuario } from './usuario.entity';

@Entity()
export class rol {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  nombre: string;

  @OneToMany(() => usuario, (usuario) => usuario.fk_rol_user)
  usuario: usuario[];
}

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { usuario } from './usuario.entity';

@Entity()
export class estampado {
  @PrimaryGeneratedColumn()
  idEstampado: number;

  @Column({ type: 'text' })
  diseño: string;

  @Column({ type: 'varchar', length: 20 })
  nombre: string;

  @Column({ type: 'varchar', length: 20 })
  categoria: string;

  @Column({ type: 'varchar', length: 20 })
  usuarioEmail: string;

  @ManyToOne(() => usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuarioEmail', referencedColumnName: 'email' })
  usuario: usuario;
}

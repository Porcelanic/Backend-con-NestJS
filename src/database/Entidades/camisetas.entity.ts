import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn, IntegerType } from 'typeorm';
import { usuario } from './usuario.entity';

@Entity()
export class camisetas {
  @PrimaryGeneratedColumn()
  idCamiseta: number;

  @Column({ type: 'text' })
  diseño: string;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'varchar', length: 20 })
  tipo: string;

  @Column({ type: 'integer'})
  precio: IntegerType;

  @Column({ type: 'varchar', length: 45 })
  usuarioEmail: string;

  @ManyToOne(() => usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuarioEmail', referencedColumnName: 'email' })
  usuario: usuario;

}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { usuario } from './usuario.entity';

@Entity()
export class informacionEnvio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 45 })
  barrio: string;
  @Column({ type: 'varchar', length: 45 })
  ciudad: string;
  @Column({ type: 'varchar', length: 45 })
  pais: string;
  @Column({ type: 'varchar', length: 10 })
  codigoPostal: string;
  @Column({ type: 'varchar', length: 45 })
  direccion: string;
  @Column({ type: 'varchar', length: 13 })
  telefono: string;
  @Column({ type: 'varchar', length: 45 })
  usuarioEmail: string;
  @ManyToOne(() => usuario, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'usuarioEmail', referencedColumnName: 'email' })
  usuario: usuario;
}

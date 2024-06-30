import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class estampado {
  @PrimaryGeneratedColumn()
  idestampado: number;
  @Column({ type: 'text' })
  diseño: string;
  @Column({ type: 'varchar', length: 20 })
  nombre: string;
  @Column({ type: 'varchar', length: 20 })
  categoria: string;
  @Column({ type: 'varchar', length: 45 })
  artista_email: string;
}

import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class artista {
  @PrimaryColumn({ type: 'varchar', length: 45 })
  correo: string;
  @Column({ type: 'varchar', length: 45 })
  nombre: string;
  @Exclude()
  @Column({ type: 'varchar', length: 45 })
  password: string;
}

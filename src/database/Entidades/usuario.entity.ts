import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { rol } from './rol.entity';

@Entity()
export class usuario {
  @PrimaryColumn({ type: 'varchar', length: 45 })
  email: string;

  @Column({ type: 'varchar', length: 45 })
  nombre: string;

  @Exclude()
  @Column({ type: 'varchar', length: 45 })
  password: string;

  @Column({ type: 'integer'})
  rolId: number;

  @ManyToOne(() => rol, (rol) => rol.usuario, {
    nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'rolId', referencedColumnName: 'id' })
  fk_rol_user: rol;
}

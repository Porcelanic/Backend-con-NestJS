import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class material {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  nombre: string;
  @Column({ type: 'integer'})
  cantidad: number;
}

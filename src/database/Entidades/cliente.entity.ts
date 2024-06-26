import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    PrimaryColumn} from 'typeorm';
import { Exclude } from 'class-transformer';


@Entity()
export class usuario {
  
  @PrimaryColumn()
  @Column({ type: 'varchar', length: 50})
  correo: string;
  @Column({ type: 'varchar', length: 50})
  nombre: string;
  @Exclude()
  @Column({ type: 'varchar', length: 200})
  password: string;
}
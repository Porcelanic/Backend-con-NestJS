import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,} from 'typeorm';


@Entity()
export class camisa {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 20})
  color: string;
  @Column({ type: 'varchar', length: 3})
  talla: string;
  @Column({ type: 'varchar', length: 20})
  tela: string;
  @Column({ type: 'varchar', length: 20})
  marca: string;
}
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { cliente } from './cliente.entity';
import { informacionEnvio } from './informacionEnvio.entity';
@Entity()
export class pedido {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'decimal', precision: 5, scale: 2 })
  valor: number;
  @Column({ type: 'varchar', length: 15 })
  estado: string;
  @Column({ type: 'date'})
  fechaPedido: Date;
  @Column({ type: 'date'})
  fechaEnvio: Date;
  @ManyToOne(() => cliente, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'clienteEmail', referencedColumnName: 'email' })
  cliente: cliente;
  @ManyToOne(() => informacionEnvio)
  @JoinColumn({ name: 'informacionEnvioId', referencedColumnName: 'id' })
  informacionEnvio: informacionEnvio;
}

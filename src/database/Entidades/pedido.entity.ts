import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { informacionEnvio } from './informacionEnvio.entity';
import { usuario } from './usuario.entity';
@Entity()
export class pedido {
  @PrimaryGeneratedColumn()
  numeroPedido: number;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @Column({ type: 'varchar', length: 15 })
  estado: string;

  @Column({ type: 'date'})
  fechaPedido: Date;

  @Column({ type: 'date'})
  fechaEnvio: Date;

  @Column({ type: 'varchar', length: 45 })
  usuarioEmail: string;
  @ManyToOne(() => usuario, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'usuarioEmail', referencedColumnName: 'email' })
  usuario: usuario;
  
  @Column({ type: 'integer'})
  informacionEnvioId: number;
  @ManyToOne(() => informacionEnvio)
  @JoinColumn({ name: 'informacionEnvioId', referencedColumnName: 'id' })
  informacionEnvio: informacionEnvio;
}

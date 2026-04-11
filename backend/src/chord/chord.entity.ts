import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Chord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  readableName: string;

  @Column()
  name: string;
}

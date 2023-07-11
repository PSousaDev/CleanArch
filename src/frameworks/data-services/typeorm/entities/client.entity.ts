import { Min } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Min(3)
  clientFirstName: string;

  @Column('varchar')
  @Min(3)
  clientLastName: string;

  @CreateDateColumn()
  createdAt: String;

  @UpdateDateColumn()
  updtedAt: String;

  public clientUpdatedAt: Date;
}

export type ClientDocument = Client & Document;

export const ClientSchema = new Client();

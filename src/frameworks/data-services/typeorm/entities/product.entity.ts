import { Min } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Min(3)
  productName: string;

  @Column('float')
  productValue: number;

  @Column('boolean', { default: true })
  productIsOnSale: boolean;

  @Column('int', { default: null, nullable: true })
  clientId: number;

  @CreateDateColumn()
  createdAt: String;

  @UpdateDateColumn()
  updtedAt: String;
}

export type ProductDocument = Product & Document;

export const ProductSchema = new Product();

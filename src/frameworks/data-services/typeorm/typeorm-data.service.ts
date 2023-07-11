import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Client, ClientDocument, Product, ProductDocument } from './entities';
import { IDataServices } from '../../../core';
import { TypeOrmGenericRepository } from './typeorm-generic-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TypeormDataService
  implements IDataServices, OnApplicationBootstrap
{
  product: TypeOrmGenericRepository<Product>;
  client: TypeOrmGenericRepository<Client>;

  constructor(
    @InjectRepository(Client)
    private ClientRepository: Repository<ClientDocument>,
    @InjectRepository(Product)
    private ProductRepository: Repository<ProductDocument>,
  ) {}
  onApplicationBootstrap() {
    this.client = new TypeOrmGenericRepository<Client>(this.ClientRepository);
    this.product = new TypeOrmGenericRepository<Product>(
      this.ProductRepository,
    );
  }
}

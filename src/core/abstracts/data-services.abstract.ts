import { Product, Client } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract client: IGenericRepository<Client>;

  abstract product: IGenericRepository<Product>;
}

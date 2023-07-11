import {
  Repository,
  FindOptionsWhere,
  DeepPartial,
  ObjectLiteral,
} from 'typeorm';
import { IGenericRepository } from '../../../core';

export class TypeOrmGenericRepository<T extends ObjectLiteral>
  implements IGenericRepository<T>
{
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  async getAll(): Promise<T[]> {
    return await this._repository.find();
  }

  async get(id: number): Promise<T> {
    return await this._repository.findOneBy({
      id,
    } as unknown as FindOptionsWhere<T>);
  }

  async create(item: T): Promise<T> {
    const created = this._repository.create(item);
    const result = await this._repository.save(created);
    return result;
  }

  async update(id: any, partialEntity: DeepPartial<T>) {
    await this._repository.update(id, partialEntity);
    return await this._repository.findOneBy({
      id,
    } as unknown as FindOptionsWhere<T>);
  }

  async delete(id: number): Promise<void> {
    await this._repository.delete(id);
  }
}

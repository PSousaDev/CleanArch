import { Injectable } from '@nestjs/common';
import { Client } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos';
import { ClientFactoryService } from './client-factory.service';

@Injectable()
export class ClientUseCases {
  constructor(
    private dataServices: IDataServices,
    private clientFactoryService: ClientFactoryService,
  ) {}

  async getAllClients(): Promise<Client[]> {
    return await this.dataServices.client.getAll();
  }

  async getClientById(id: any): Promise<Client> {
    return await this.dataServices.client.get(id);
  }

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientFactoryService.createNewClient(createClientDto);
    return await this.dataServices.client.create(client);
  }

  updateClient(
    clientId: number,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const client = this.clientFactoryService.updateClient(updateClientDto);
    return this.dataServices.client.update(clientId, client);
  }
  async deleteClient(clientId: number): Promise<Client> {
    const client = await this.getClientById(clientId);
    this.dataServices.client.delete(clientId);
    return client;
  }
}

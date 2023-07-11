import { Injectable } from '@nestjs/common';
import { Client } from '../../core/entities';
import {
  CreateClientResponseDto,
  CreateClientDto,
  UpdateClientDto,
} from '../../core/dtos';

@Injectable()
export class ClientFactoryService {
  createNewClient(createAuthorDto: CreateClientDto) {
    const newClient = new Client();
    newClient.clientFirstName = createAuthorDto.clientFirstName;
    newClient.clientLastName = createAuthorDto.clientLastName;
    return newClient;
  }

  updateClient(updateAuthorDto: UpdateClientDto) {
    const newClient = new Client();
    newClient.clientFirstName = updateAuthorDto.clientFirstName;
    newClient.clientLastName = updateAuthorDto.clientLastName;
    return newClient;
  }
}

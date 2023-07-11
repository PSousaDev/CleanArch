import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from '../core/dtos';
import { ClientUseCases } from '../use-cases/client/client.use-case';

@Controller('api/client')
export class ClientController {
  constructor(private readonly clientUseCases: ClientUseCases) {}

  @Get()
  async getAll() {
    return await this.clientUseCases.getAllClients();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.clientUseCases.getClientById(id);
  }

  @Post()
  createAuthor(@Body() clientDto: CreateClientDto) {
    return this.clientUseCases.createClient(clientDto);
  }

  @Put(':id')
  updateClient(
    @Param('id') authorId: number,
    @Body() updateAuthorDto: UpdateClientDto,
  ) {
    return this.clientUseCases.updateClient(authorId, updateAuthorDto);
  }
  @Delete(':id')
  deleteClient(@Param('id') authorId: number) {
    return this.clientUseCases.deleteClient(authorId);
  }
}

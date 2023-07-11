import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ClientFactoryService } from './client-factory.service';
import { ClientUseCases } from './client.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ClientFactoryService, ClientUseCases],
  exports: [ClientFactoryService, ClientUseCases],
})
export class ClientUseCasesModule {}

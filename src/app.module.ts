import { Module } from '@nestjs/common';

import {
  AppController,
  ClientController,
  ClientUtilsController,
  ProdcutController,
  ProdcutUtilsController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ClientUseCasesModule } from './use-cases/client/client-use-cases.module';
import { ProductUseCasesModule } from './use-cases/product/product-use-cases.module';

@Module({
  imports: [DataServicesModule, ClientUseCasesModule, ProductUseCasesModule],
  controllers: [
    ClientUtilsController,
    AppController,
    ClientController,
    ProdcutController,
    ProdcutUtilsController,
  ],
  providers: [],
})
export class AppModule {}

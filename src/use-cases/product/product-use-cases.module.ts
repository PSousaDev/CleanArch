import { Module, ValidationPipe } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ProductFactoryService } from './product-factory.service';
import { ProductUseCases } from './product.use-case';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DataServicesModule],
  providers: [
    ProductFactoryService,
    ProductUseCases,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
  exports: [ProductFactoryService, ProductUseCases],
})
export class ProductUseCasesModule {}

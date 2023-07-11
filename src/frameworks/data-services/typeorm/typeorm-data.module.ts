import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDataServices } from '../../../core';
import { TypeormDataService } from './typeorm-data.service';
import { Client, Product } from './entities';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Client]),
    TypeOrmModule.forRoot({
      type: DATA_BASE_CONFIGURATION.type,
      database: DATA_BASE_CONFIGURATION.database,
      entities: [Product, Client],
      synchronize: true,
    }),
  ],

  providers: [
    {
      provide: IDataServices,
      useClass: TypeormDataService,
    },
  ],
  exports: [IDataServices],
})
export class TypeOrmDataServicesModule {}

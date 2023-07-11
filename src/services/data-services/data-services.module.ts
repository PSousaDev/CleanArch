import { Module } from '@nestjs/common';
import { TypeOrmDataServicesModule } from '../../frameworks/data-services/typeorm/typeorm-data.module';

@Module({
  imports: [TypeOrmDataServicesModule],
  exports: [TypeOrmDataServicesModule],
})
export class DataServicesModule {}

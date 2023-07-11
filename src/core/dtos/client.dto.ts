import { IsNotEmpty, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  clientFirstName: string;

  @IsString()
  @IsNotEmpty()
  clientLastName: string;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {}

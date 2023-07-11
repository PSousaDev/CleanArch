import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @IsNotEmpty()
  productValue: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsBoolean()
  @IsOptional()
  productIsOnSale: boolean;
  @IsNumber()
  @IsOptional()
  clientId: number;
}

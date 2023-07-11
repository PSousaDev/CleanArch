import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../core/dtos';
import { ProductUseCases } from 'src/use-cases/product/product.use-case';

@Controller('utils/product')
export class ProdcutUtilsController {
  constructor(private readonly productUseCase: ProductUseCases) {}

  @Get('sold')
  async getSoldProducts() {
    return await this.productUseCase.getSoldProducts();
  }
}

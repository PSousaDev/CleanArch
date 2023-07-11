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

@Controller('api/product')
export class ProdcutController {
  constructor(private readonly productUseCase: ProductUseCases) {}

  @Get()
  async getAll() {
    return await this.productUseCase.getAllProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.productUseCase.getProductsById(id);
  }

  @Post()
  createAuthor(@Body() productDto: CreateProductDto) {
    return this.productUseCase.createProduct(productDto);
  }

  @Put(':id')
  updateClient(
    @Param('id') authorId: number,
    @Body() updateAuthorDto: UpdateProductDto,
  ) {
    return this.productUseCase.updateProduct(authorId, updateAuthorDto);
  }
  @Delete(':id')
  deleteClient(@Param('id') authorId: number) {
    return this.productUseCase.deleteProduct(authorId);
  }
}

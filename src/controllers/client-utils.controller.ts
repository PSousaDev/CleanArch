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
import { ClientUseCases } from 'src/use-cases/client/client.use-case';

@Controller('utils/client')
export class ClientUtilsController {
  constructor(
    private readonly productUseCase: ProductUseCases,
    private readonly clientUseCase: ClientUseCases,
  ) {}

  @Get(':id')
  async getProductByClient(@Param('id') id: number) {
    const products = await this.productUseCase.getAllProducts();
    const filteredProducts = products
      .filter((products) => products.clientId === id)
      .map((product) => {
        return product.productName;
      });
    filteredProducts;
  }
  @Get(':id/quantity')
  async getManyProductByClient(@Param('id') id: number) {
    const finalResult = [];
    const products = await this.productUseCase.getAllProducts();
    const filteredProducts = products.filter(
      (products) => products.clientId === id,
    );
    filteredProducts.map((product) => {
      return finalResult.push({
        NomeDoProduto: product.productName,
        DataDaCompra: product.updtedAt,
        Preco: product.productValue,
      });
    });
    return finalResult;
  }
}

import { Injectable } from '@nestjs/common';
import { Product } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

import { UpdateProductDto, CreateProductDto } from '../../core/dtos';

import { ProductFactoryService } from './product-factory.service';

@Injectable()
export class ProductUseCases {
  constructor(
    private dataServices: IDataServices,
    private productFactoryService: ProductFactoryService,
  ) {}

  getAllProducts(): Promise<Product[]> {
    return this.dataServices.product.getAll();
  }

  async getSoldProducts(): Promise<Product[]> {
    const allProducts = await this.getAllProducts();
    return allProducts.filter((product) => product.productIsOnSale === false);
  }
  getProductsById(id: any): Promise<Product> {
    return this.dataServices.product.get(id);
  }

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product =
      this.productFactoryService.createNewProduct(createProductDto);
    return this.dataServices.product.create(product);
  }

  async updateProduct(
    productId: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    updateProductDto.clientId
      ? null
      : await this.changeStatusProduct(productId);
    const product = this.productFactoryService.updateProduct(updateProductDto);
    return this.dataServices.product.update(productId, product);
  }

  async deleteProduct(productId: number): Promise<Product> {
    const product = await this.getProductsById(productId);
    this.dataServices.product.delete(productId);
    return product;
  }

  private async changeStatusProduct(productId: number) {
    const product = await this.getProductsById(productId);

    if (product.clientId !== undefined) {
      return await this.dataServices.product.update(productId, {
        productIsOnSale: false,
        productName: product.productName,
        productValue: product.productValue,
        clientId: product.clientId,
      });
    } else {
      return await this.dataServices.product.update(productId, {
        productIsOnSale: true,
        productName: product.productName,
        productValue: product.productValue,
        clientId: product.clientId,
      });
    }
  }
}

import { Injectable } from '@nestjs/common';
import { Product } from '../../core/entities';
import { UpdateProductDto, CreateProductDto } from '../../core/dtos';

@Injectable()
export class ProductFactoryService {
  createNewProduct(createProductDto: CreateProductDto) {
    const newProduct = new Product();
    newProduct.productName = createProductDto.productName;
    newProduct.productValue = createProductDto.productValue;
    newProduct.productName = createProductDto.productName;
    return newProduct;
  }

  updateProduct(updateProductDto: UpdateProductDto) {
    const newProduct = new Product();
    newProduct.productName = updateProductDto.productName;
    newProduct.clientId = updateProductDto.clientId;
    newProduct.productIsOnSale = updateProductDto.clientId ? false : true;
    newProduct.productValue = updateProductDto.productValue;
    return newProduct;
  }
}

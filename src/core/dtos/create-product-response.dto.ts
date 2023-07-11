import { Product } from '../entities';

export class CreateProductResponseDto {
  success: boolean;

  createdBook: Product;
}

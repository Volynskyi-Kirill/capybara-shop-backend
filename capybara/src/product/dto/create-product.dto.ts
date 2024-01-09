import { ApiProperty } from '@nestjs/swagger';
import { ClothingSize, ProductCategory } from '../utils/product.enum';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  size: ClothingSize[];
  @ApiProperty()
  images: [string];
  @ApiProperty()
  price: number;
  @ApiProperty()
  category: ProductCategory;
  @ApiProperty()
  colors: [string];
  @ApiProperty()
  availability: boolean;
  @ApiProperty()
  description: string;
  @ApiProperty()
  deliveryInfo: string;
}

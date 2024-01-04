import { ApiProperty } from '@nestjs/swagger';
import { ClothingSize } from '../utils/product.enum';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  size: ClothingSize[];
  @ApiProperty()
  images: string;
  @ApiProperty()
  price: number;
}

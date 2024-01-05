import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ClothingSize, ProductCategory } from './utils/product.enum';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, type: [String], enum: Object.values(ClothingSize) })
  size: ClothingSize[];

  @Prop({ required: true })
  images: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, type: String, enum: Object.values(ProductCategory) })
  category: ProductCategory;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

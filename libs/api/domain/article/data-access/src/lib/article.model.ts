import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  // @ApiProperty()
  text!: string;

  @Prop()
  // @ApiProperty()
  author!: string;
}

export type ArticleDocument = Article & Document;

export const ArticleSchema = SchemaFactory.createForClass(Article);

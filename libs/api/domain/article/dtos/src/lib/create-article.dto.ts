// import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  // @ApiProperty({
  //   example: 'My First Article',
  // })
  text!: string;

  // @ApiProperty({
  //   example: 'Domagoj-Mario Mendas',
  // })
  author!: string;
}

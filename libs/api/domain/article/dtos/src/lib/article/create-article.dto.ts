import { ApiProperty } from '@nestjs/swagger';

/* <SWAGGER>
 *
 * Utilizing `@nestjs/swagger/plugin`
 * [apps/api/project.json#targets.build.options.tsPlugins]
 *
 * You can use 'mix nad match' approach:
 * by using plugin and still combining decorators
 *
 */

export class CreateArticleDto {
  @ApiProperty({
    example: 'My First Article',
  })
  text!: string;

  @ApiProperty({
    example: 'Wile E. Coyote, Genius',
  })
  author!: string;
}

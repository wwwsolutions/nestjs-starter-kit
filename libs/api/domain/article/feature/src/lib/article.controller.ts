import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  ArticleService,
  Article,
} from '@wwwsolutions/api/domain/article/data-access';

import { CreateArticleDto } from '@wwwsolutions/api/domain/article/dtos';

@Controller('articles')
@ApiTags('articles')
export class ArticleController {
  constructor(private article: ArticleService) {}

  @Get()
  // @ApiOkResponse({
  //   type: Article,
  //   isArray: true,
  // })
  async getAllArticles(): Promise<Article[]> {
    return await this.article.getAll();
  }

  @Post()
  // @ApiCreatedResponse({
  //   type: Article,
  // })
  async createArticle(@Body() article: CreateArticleDto): Promise<Article> {
    return await this.article.createArticle(article);
  }
}

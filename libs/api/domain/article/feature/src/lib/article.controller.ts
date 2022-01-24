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
  constructor(private readonly article: ArticleService) {}

  @Get()
  async getAllArticles(): Promise<Article[]> {
    return await this.article.getAll();
  }

  @Post()
  async createArticle(@Body() article: CreateArticleDto): Promise<Article> {
    return await this.article.createArticle(article);
  }
}

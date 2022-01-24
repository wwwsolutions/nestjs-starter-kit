import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Article, ArticleDocument } from './models/article.model';

import { CreateArticleDto } from '@wwwsolutions/api/domain/article/dtos';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private readonly article: Model<ArticleDocument>
  ) {}

  async getAll() {
    return await this.article.find().exec();
  }

  async createArticle(dto: CreateArticleDto) {
    const article = new this.article(dto);
    return await this.article.create(article);
  }
}

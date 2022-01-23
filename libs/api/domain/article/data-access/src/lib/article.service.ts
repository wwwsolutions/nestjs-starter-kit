import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Article, ArticleDocument } from './article.model';

import { CreateArticleDto } from '@wwwsolutions/api/domain/article/dtos';

@Injectable()
export class ArticleService {
  constructor(
    // inject the `article` model
    @InjectModel(Article.name) private article: Model<ArticleDocument>
  ) {}

  async getAll() {
    return await this.article.find().exec();
  }

  async createArticle(dto: CreateArticleDto) {
    // create a new `article` model
    const article = new this.article(dto);
    // push it to the database
    return await this.article.create(article);
  }
}

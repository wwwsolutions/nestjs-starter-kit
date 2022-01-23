import { Module } from '@nestjs/common';

import { ArticleController } from './article.controller';

import { ApiDomainArticleDataAccessModule } from '@wwwsolutions/api/domain/article/data-access';

@Module({
  imports: [ApiDomainArticleDataAccessModule],
  controllers: [ArticleController],
})
export class ApiDomainArticleFeatureModule {}

export * from './lib/api-domain-article-data-access.module';
export * from './lib/article.service';

// the model is the contract between application and database
// in real word project you do NOT to expose models
// you want your service to manage that
// instead, implement transformation layer to transform `Article` model to `ArticleDto`
// `Article` --> transform layer --> `ArticleDto`
// TODO: fix this w/ https://www.npmjs.com/package/@nartc/automapper

export * from './lib/models/article.model';

export * from './articles.service';
import { ArticlesApiService } from './articles.service';
export * from './default.service';
import { DefaultApiService } from './default.service';
export const APIS = [ArticlesApiService, DefaultApiService];

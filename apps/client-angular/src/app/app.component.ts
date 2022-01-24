import { Component } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ArticlesApiService } from '@wwwsolutions/shared/data-access-api';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles$ = this.articles.articleControllerGetAllArticles();

  constructor(private articles: ArticlesApiService) {}
}

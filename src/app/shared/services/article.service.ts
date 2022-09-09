import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from '../types/article.interface';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles/' + slug;
    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(map((response: GetArticleResponseInterface) => response.article));
  }
}

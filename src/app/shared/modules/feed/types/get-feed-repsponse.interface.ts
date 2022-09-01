import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface GetFeedReponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}

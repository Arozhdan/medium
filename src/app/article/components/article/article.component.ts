import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { deleteArticleAction } from '../../store/actions/delete-article.action';
import { getArticleAction } from '../../store/actions/get-article.action';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  slug: string;
  article$: Observable<ArticleInterface | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article$ = this.store.pipe(select(articleSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isAuthor$ = combineLatest(
      this.article$,
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) return false;
          return currentUser.username === article.author.username;
        }
      )
    );
  }
  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}

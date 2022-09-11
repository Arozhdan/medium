import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from '../../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { createArticleAction } from '../../store/actions/create-article.action';

@Component({
  selector: 'app-edit-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<ValidationErrors | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(
      createArticleAction({
        articleInput,
      })
    );
  }
}

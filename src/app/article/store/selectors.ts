import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { ArticleStateInterface } from '../types/article-state.interface';

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (feedState: ArticleStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (feedState: ArticleStateInterface) => feedState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (feedState: ArticleStateInterface) => feedState.data
);

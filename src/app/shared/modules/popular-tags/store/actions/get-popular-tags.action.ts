import { createAction, props } from '@ngrx/store';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';
import { ActionTypes } from '../action-types';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsFailuerAction = createAction(
  ActionTypes.GET_POPULAR_TAGS
);

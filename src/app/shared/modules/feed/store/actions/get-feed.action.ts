import { createAction, props } from '@ngrx/store';
import { GetFeedReponseInterface } from '../../types/get-feed-repsponse.interface';
import { ActionTypes } from '../action-types';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedReponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);

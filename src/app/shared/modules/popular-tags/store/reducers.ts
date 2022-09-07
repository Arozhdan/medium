import { Action, createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popular-tags-state.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailuerAction,
  getPopularTagsSuccessAction,
} from './actions/get-popular-tags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false,
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, payload): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: payload.popularTags,
    })
  ),
  on(
    getPopularTagsFailuerAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducerts(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}

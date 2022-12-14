import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';
import { PopularTagsService } from '../../services/popular-tags.service';
import {
  getPopularTagsAction,
  getPopularTagsFailuerAction,
  getPopularTagsSuccessAction,
} from '../actions/get-popular-tags.action';

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError(() => {
            return of(getPopularTagsFailuerAction());
          })
        );
      })
    )
  );
}

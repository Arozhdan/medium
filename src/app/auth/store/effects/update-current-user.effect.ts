import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import {
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
  updateCurrentUserAction,
} from 'src/app/auth/store/actions/update-current-user.action';

@Injectable()
export class UpdateCurrentUserEffect {
  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ user }) => {
        return this.authService.updateCurrentUser(user).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}

import {
  AuthSignInRequest,
  AuthSignInSuccess,
  AuthSignInFailure,
} from './auth.actions';
import { AuthActionsType } from './auth.types';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { of } from 'rxjs';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  signInRequest$ = this.actions$.pipe(
    ofType<ReturnType<typeof AuthSignInRequest>>(
      AuthActionsType.AUTH_SIGN_IN_REQUEST
    ),
    switchMap(({ payload }) =>
      this.authService.signIn(payload).pipe(
        map((user) => AuthSignInSuccess({ payload: user })),
        catchError((err) => of(AuthSignInFailure({ payload: err })))
      )
    )
  );
}

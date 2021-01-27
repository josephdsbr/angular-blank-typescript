import {
  AuthSignInRequest,
  AuthSignInSuccess,
  AuthSignInFailure,
} from './auth.actions';
import { AuthActionsType } from './auth.types';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  signInRequest$ = this.actions$.pipe(
    ofType<ReturnType<typeof AuthSignInRequest>>(
      AuthActionsType.AUTH_SIGN_IN_REQUEST
    ),
    switchMap(({ credentials }) =>
      this.authService.signIn(credentials).pipe(
        map((user) => AuthSignInSuccess({ user })),
        catchError((error) => of(AuthSignInFailure({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  signInSuccess$ = this.actions$.pipe(
    ofType(AuthActionsType.AUTH_SIGN_IN_SUCCESS),
    tap(() => this.router.navigate(['/pages/user']))
  );
}

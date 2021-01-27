import { AuthActionsType } from './auth.types';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  @Effect({ dispatch: false })
  signInRequest$ = this.actions$.pipe(
    ofType(AuthActionsType.AUTH_SIGN_IN_REQUEST),
    tap(() => console.log('Olá mundo'))
  );
}

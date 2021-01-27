import {
  AuthActionsType,
  AuthSignInRequestModel,
  AuthSignInSuccessModel,
} from './auth.types';
import { Action } from '@ngrx/store';

import { createAction, props } from '@ngrx/store';

export const AuthSignInRequest = createAction(
  AuthActionsType.AUTH_SIGN_IN_REQUEST,
  props<{ credentials: AuthSignInRequestModel }>()
);

export const AuthSignInSuccess = createAction(
  AuthActionsType.AUTH_SIGN_IN_SUCCESS,
  props<{ user: AuthSignInSuccessModel }>()
);

export const AuthSignInFailure = createAction(
  AuthActionsType.AUTH_SIGN_IN_FAILURE,
  props<{ error: Error }>()
);

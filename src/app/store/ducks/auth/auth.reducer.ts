import produce from 'immer';
import AuthState, { AuthActionsType } from './auth.types';
import { createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authInitialState: AuthState = {
  signed: false,
  name: '',
};

export const AuthReducer = createReducer(
  authInitialState,
  on(authActions.AuthSignInSuccess, (state, { payload }) =>
    produce(state, (draft) => {
      draft.name = payload.name;
      draft.signed = true;
    })
  )
);

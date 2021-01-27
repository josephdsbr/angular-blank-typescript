import { ActionReducerMap } from '@ngrx/store';
import AuthState from './ducks/auth/auth.types';
import { AuthReducer } from './ducks/auth/auth.reducer';

export interface AppState {
  readonly auth: AuthState;
}

export const Reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
};

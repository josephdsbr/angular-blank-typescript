import { AppState } from './../../index';
import { createSelector } from '@ngrx/store';
import AuthState from './auth.types';

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthSigned = createSelector(
  selectAuth,
  (state) => state.signed
);

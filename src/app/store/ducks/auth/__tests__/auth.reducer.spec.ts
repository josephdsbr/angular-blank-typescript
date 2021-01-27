import { AuthSignInSuccessModel } from './../auth.types';
import * as authActions from '../auth.actions';
import { AuthReducer, authInitialState } from '../auth.reducer';

it('should set name and signed as true when SIGN_IN_SUCCESS is dispatched', () => {
  const request: AuthSignInSuccessModel = {
    name: 'José Vinícius Santos de Melo',
  };

  const action = authActions.AuthSignInSuccess({ user: request });
  const result = AuthReducer(authInitialState, action);

  expect(result.name).toBe(request.name);
  expect(result.signed).toBeTruthy();
});

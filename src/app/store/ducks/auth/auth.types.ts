export default interface AuthState {
  signed: boolean;
  name: string;
}

export enum AuthActionsType {
  AUTH_SIGN_IN_REQUEST = '@auth/SIGN IN REQUEST',
  AUTH_SIGN_IN_SUCCESS = '@auth/SIGN IN SUCCESS',
  AUTH_SIGN_IN_FAILURE = '@auth/SIGN IN FAILURE',
}

export interface AuthSignInRequestModel {
  ni: string;
  password: string;
}

export interface AuthSignInSuccessModel {
  name: string;
}

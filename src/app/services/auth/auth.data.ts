import { Observable } from 'rxjs';
import {
  AuthSignInRequestModel,
  AuthSignInSuccessModel,
} from 'src/app/store/ducks/auth/auth.types';
export abstract class AuthData {
  abstract signIn(
    data: AuthSignInRequestModel
  ): Observable<AuthSignInSuccessModel>;
}

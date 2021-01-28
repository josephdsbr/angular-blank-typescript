import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthSignInRequestModel,
  AuthSignInSuccessModel,
} from 'src/app/store/ducks/auth/auth.types';
import { AuthData } from './auth.data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthData {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  signIn(data: AuthSignInRequestModel): Observable<AuthSignInSuccessModel> {
    return this.http.get<AuthSignInSuccessModel>(`${this.baseUrl}/users`);
  }
}

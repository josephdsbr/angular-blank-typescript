import { AuthSignInRequest } from './../../store/ducks/auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent {
  constructor(private store: Store<AppState>) {}

  handleLogin() {
    this.store.dispatch(
      AuthSignInRequest({ payload: { ni: '70808596462', password: '123' } })
    );
  }
}

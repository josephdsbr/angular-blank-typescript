import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AuthSignInRequest } from 'src/app/store/ducks/auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private store: Store<AppState>) {}

  handleLogin() {
    const credentials = { ni: '70808596462', password: '123' };
    this.store.dispatch(AuthSignInRequest({ credentials }));
  }
}

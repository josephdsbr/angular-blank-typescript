import { selectAuthName } from './../../store/ducks/auth/auth.selector';
import { AuthSignInRequest } from './../../store/ducks/auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent {
  name: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.name = this.store.select(selectAuthName);
  }
}

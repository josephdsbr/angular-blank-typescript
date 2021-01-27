/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  AuthSignInSuccessModel,
  AuthSignInRequestModel,
  AuthActionsType,
} from './../auth.types';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CommonsMetaReducer } from './../../../meta-reducers/index';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AuthEffects } from '../auth.effects';
import { Actions, EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Reducers } from 'src/app/store';
import * as authActions from '../auth.actions';
import * as faker from 'faker';
import { cold, hot } from 'jasmine-marbles';
import { TypedAction } from '@ngrx/store/src/models';

describe('authEffects', () => {
  let actions: Observable<any>;
  let effects$: AuthEffects;
  let authService: AuthService;
  let metadata: EffectsMetadata<AuthEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(Reducers, { metaReducers: CommonsMetaReducer }),
      ],
      providers: [
        Actions,
        AuthEffects,
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn(),
          },
        },
        provideMockActions(() => actions),
        Store,
      ],
    }).compileComponents();

    effects$ = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
    metadata = getEffectsMetadata(effects$);
  });

  it('should be created', () => {
    expect(metadata).toBeTruthy();
  });
});

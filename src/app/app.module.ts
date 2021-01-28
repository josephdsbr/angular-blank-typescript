import { CoreModule } from './@core/core.module';
import { CommonsMetaReducer } from './store/meta-reducers/index';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './store/ducks/auth/auth.effects';
import { extModules } from './store/extensions/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { Reducers } from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot(Reducers, { metaReducers: CommonsMetaReducer }),
    extModules,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

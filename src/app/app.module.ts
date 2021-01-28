import { GlobalErrorHandler } from './exceptions/handlers/global-error-handler';
import { PipeModule } from './pipe/pipe.module';
import { CoreModule } from './@core/core.module';
import { CommonsMetaReducer } from './store/meta-reducers/index';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './store/ducks/auth/auth.effects';
import { extModules } from './store/extensions/index';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { Reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot(Reducers, { metaReducers: CommonsMetaReducer }),
    extModules,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    CoreModule,
    PipeModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

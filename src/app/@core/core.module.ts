import { initApplication } from './app-initializer';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalInterceptor } from './global.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    GlobalInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      multi: true,
      deps: [Router],
    },
  ],
})
export class CoreModule {}

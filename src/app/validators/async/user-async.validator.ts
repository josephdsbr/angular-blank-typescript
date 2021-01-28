import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAsyncValidator {
  constructor() {}

  isUserAlreadyRegistered(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> =>
      timer(1000).pipe(
        map(() => ({
          exists: true,
        }))
      );
  }
}

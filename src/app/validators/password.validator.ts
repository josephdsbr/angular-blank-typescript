import { AbstractControl, ValidatorFn } from '@angular/forms';

const passwordValidator: ValidatorFn = () => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const specialCharacters = ['*', '#', '?', '&'];
    const regex = `^[^${specialCharacters.join()}]*$`;
    return String(control.value)?.match(regex)
      ? null
      : { invalidPassword: control.value };
  };
};

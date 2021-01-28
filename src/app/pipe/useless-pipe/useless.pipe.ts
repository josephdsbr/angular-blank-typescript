import { Pipe, PipeTransform } from '@angular/core';

/**
 * Adicionar um prefixo e um sufixo a uma string
 * @export
 * @class uselessPipe
 * @implements {PipeTransform}
 */
@Pipe({ name: 'useless' })
export class UselessPipe implements PipeTransform {
  transform(value: string | null): string {
    return `Sr. ${value}. Seja bem-vindo!`;
  }
}

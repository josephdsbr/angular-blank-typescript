import { UselessPipe } from './useless.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UselessPipe],
  exports: [UselessPipe],
  imports: [CommonModule],
})
export class UselessPipeModule {}

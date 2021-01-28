import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UselessPipeModule } from './useless-pipe/useless-pipe.module';

@NgModule({
  imports: [CommonModule, UselessPipeModule],
})
export class PipeModule {}

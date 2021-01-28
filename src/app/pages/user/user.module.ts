import { UselessPipeModule } from './../../pipe/useless-pipe/useless-pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, UselessPipeModule],
})
export class UserModule {}

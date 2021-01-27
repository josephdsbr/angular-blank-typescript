import { SignedGuardService } from './guard/signed-guard.service';
import { DefaultLayoutModule } from './@layouts/default-layout/default-layout.module';
import { DefaultLayoutComponent } from './@layouts/default-layout/default-layout.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { HomeComponent } from './pages/public/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((module) => module.PagesModule),
    canActivate: [SignedGuardService],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

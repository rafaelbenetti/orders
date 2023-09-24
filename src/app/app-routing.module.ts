import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { AuthLayoutComponent } from './shared/_layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/_layouts/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  {
    path: 'orders',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

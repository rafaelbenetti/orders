import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, HeaderComponent],
  imports: [RouterModule],
  providers: [],
})
export class SharedModule {}

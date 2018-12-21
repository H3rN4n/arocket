import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { SignupComponent } from './signup.component';
import { Admin } from '@app/admin/admin.service';

const routes: Routes = [
  Admin.childRoutes([
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent, data: { title: extract('Signup') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignupRoutingModule {}

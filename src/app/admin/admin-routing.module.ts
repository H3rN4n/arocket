import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AdminComponent } from './admin.component';
import { AuthenticationAdminGuard } from '@app/core/authentication/authentication.admin.guard';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent, canActivate: [AuthenticationAdminGuard], data: { title: extract('Admin') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
